// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const styleData = [{
  color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#F6494C' // 0% 处的颜色
    }, {
        offset: 0.6, color: '#FE9451' // 100% 处的颜色
    }],
    global: false // 缺省为 false
  }
}, {
  color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#FFFF20' // 0% 处的颜色
    }, {
        offset: 0.6, color: '#FCBF4C' // 100% 处的颜色
    }],
    global: false // 缺省为 false
  }
}, {
  color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#4E26B6' // 0% 处的颜色
    }, {
        offset: 0.6, color: '#566EE8' // 100% 处的颜色
    }],
    global: false // 缺省为 false
  }
}, {
  color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#6BDE8F' // 0% 处的颜色
    }, {
        offset: 0.6, color: '#58EBD4' // 100% 处的颜色
    }],
    global: false // 缺省为 false
  }
}, {
  color: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: '#457EF9' // 0% 处的颜色
    }, {
        offset: 0.6, color: '#53A2F2' // 100% 处的颜色
    }],
    global: false // 缺省为 false
  }
}]

// 云函数入口函数
exports.main = async (event, context) => {
  var result//查询结果
  const wxContext = cloud.getWXContext()
  const recordType = event.recordType//记录类型，收入(cost)或者支出(revenue)
  const timeType = event.timeType//时间类型，年月周
  const value = event.value//具体的数字，那一年，2021年的哪个月，2021年的哪一周
  const year = event.year//选择的年，查询月和周的时候会用到
  const db = cloud.database()
  const Record = db.collection(recordType)
  const _ = db.command
  if(timeType == 'year') {
    result = await Record.where({
      userid: wxContext.OPENID,
      selectType: _.exists(true),
      createTime: {
        $regex: value + '.*'
      }
    }).get()
  }
  else if(timeType == 'month'){
    console.log('parseInt(value) = ' + parseInt(value))
    if(parseInt(value) < 10) {
      result = await Record.where({
        userid: wxContext.OPENID,
        selectType: _.exists(true),
        createTime: {
          $regex: year + '-0' + value + '.*'
        }
      }).get()
    } else {
      result = await Record.where({
        userid: wxContext.OPENID,
        selectType: _.exists(true),
        createTime: {
          $regex: year + '-' + value + '.*'
        }
      }).get()
    } 
  } 
  else {
    console.log("now year is" + year)
    result = await Record.where({
      userid: wxContext.OPENID,
      selectType: _.exists(true),
      createTime: {
        $regex: year + '.*'
      },
      weeks: parseInt(value)
    }).get().then()
  }
  //处理数据
  let pieData = processResult(result.data)
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    pieData: pieData
  }
}

function processResult(data) {
  if(data.length == 0) {//查询到的记录为空时返回空
    return [{
      value: 1,
      name: '无',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#F05B72' // 0% 处的颜色
          }, {
              offset: 0.6, color: '#FBCED1' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    }]
  }
  var compare = function(obj1, obj2) {//比较函数，用于sort()
    let val1 = obj1.number
    let val2 = obj2.number
    if(val1 < val2) {
      return 1
    } else if (val1 > val2) {
      return -1
    } else {
      return 0
    }
  }
  var res = []
  var pieData = []
  for(let i = 0; i< data.length; i++) { 
    let temp = {}
    temp.selectType = data[i]['selectType'];
    temp.number = data[i]['number'];
    if(res.length > 0) {
      let flag = false
      res.forEach((v, i) => {
        if(v.selectType == temp.selectType) {
          v.number += temp.number
          flag = true
        }
      })
      if(!flag) {
        res.push(temp)
      }
    } 
    else {
      res.push(temp)
    }
  }

  res.sort(compare)
  console.log(res)

  if(res.length <= 5) {
    for(let i = 0; i < res.length; i++) {
      let temp = {}
      temp.value = res[i].number;
      temp.name = res[i].selectType;
      temp.itemStyle = styleData[i];
      pieData.push(temp)
    }
  }
  else {
    for(let i = 0; i < 4; i++) {
      let temp = {}
      temp.value = res[i].number;
      temp.name = res[i].selectType;
      temp.itemStyle = styleData[i]
      pieData.push(temp)
    }
    let temp = {}
    temp.value = res[4].number;
    temp.name = '其它';//第五个数据作其他
    temp.itemStyle = styleData[4];
    for(let i = 5; i < res.length; i++) {
      temp.value += res[i].number
    }
    pieData.push(temp)
  }
  return pieData;
}