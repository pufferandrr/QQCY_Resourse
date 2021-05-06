// pages/keepaccounts/keepaccounts.js
import * as echarts from '../../components/hb/ec-canvas/echarts';

const app = getApp()
let chart =null;

var pixelRatio1 = 750 / wx.getSystemInfoSync().windowWidth;
var yeardata=[0,0,0,0,0,0,0,0,0,0,0,0]
var type='cRecord'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartchange: true,  //图表改变判断，true为折线图，false为饼图
    imageSrc: '../../images/chartchange_pie.png',//图表切换图标的url
    yeardefaultoption:{
      id:"y001",
      name:"2021年"
    },
    yearoptions: [         //下拉框的数据
    {
      time_id: 'y002',
      time_name: '2020年'
    }, {
      time_id: 'y003',
      time_name: '2019年'
    }, {
      time_id: 'y004',
      time_name: '2018年'
    }
    ],
    monthdefaultoption:{
      id:"m001",
      name:"1月"
    },
    monthoptions: [         //下拉框的数据
    {
      time_id: 'm002',
      time_name: '2月'
    }, {
      time_id: 'm003',
      time_name: '3月'
    }, {
      time_id: 'm004',
      time_name: '4月'
    }, {
      time_id: 'm005',
      time_name: '5月'
    }, {
      time_id: 'm006',
      time_name: '6月'
    }, {
      time_id: 'm007',
      time_name: '7月'
    }, {
      time_id: 'm008',
      time_name: '8月'
    }, {
      time_id: 'm009',
      time_name: '9月'
    }, {
      time_id: 'm010',
      time_name: '10月'
    }, {
      time_id: 'm011',
      time_name: '11月'
    }, {
      time_id: 'm012',
      time_name: '12月'
    }
    ],
    weekdefaultoption:{
      id:"w001",
      name:"第1周"
    },
    weekoptions: [         //下拉框的数据
    {
      time_id: 'w002',
      time_name: '第2周'
    }, {
      time_id: 'w003',
      time_name: '第3周'
    }, {
      time_id: 'w004',
      time_name: '第4周'
    }, {
      time_id: 'w005',
      time_name: '第5周'
    }, {
      time_id: 'w006',
      time_name: '第6周'
    }, {
      time_id: 'w007',
      time_name: '第7周'
    }, {
      time_id: 'w008',
      time_name: '第8周'
    }, {
      time_id: 'w009',
      time_name: '第9周'
    }, {
      time_id: 'w010',
      time_name: '第10周'
    }, {
      time_id: 'w011',
      time_name: '第11周'
    }, {
      time_id: 'w012',
      time_name: '第12周'
    }, {
      time_id: 'w013',
      time_name: '第13周'
    }, {
      time_id: 'w014',
      time_name: '第14周'
    }, {
      time_id: 'w015',
      time_name: '第15周'
    }, {
      time_id: 'w016',
      time_name: '第16周'
    }, {
      time_id: 'w017',
      time_name: '第17周'
    }, {
      time_id: 'w018',
      time_name: '第18周'
    }, {
      time_id: 'w019',
      time_name: '第19周'
    }, {
      time_id: 'w020',
      time_name: '第20周'
    }, {
      time_id: 'w021',
      time_name: '第21周'
    }, {
      time_id: 'w022',
      time_name: '第22周'
    }, {
      time_id: 'w023',
      time_name: '第23周'
    }, {
      time_id: 'w024',
      time_name: '第24周'
    }, {
      time_id: 'w025',
      time_name: '第25周'
    }, {
      time_id: 'w026',
      time_name: '第26周'
    }, {
      time_id: 'w027',
      time_name: '第27周'
    }, {
      time_id: 'w028',
      time_name: '第28周'
    }, {
      time_id: 'w029',
      time_name: '第29周'
    }, {
      time_id: 'w030',
      time_name: '第30周'
    }, {
      time_id: 'w031',
      time_name: '第31周'
    }, {
      time_id: 'w032',
      time_name: '第32周'
    }, {
      time_id: 'w033',
      time_name: '第33周'
    }, {
      time_id: 'w034',
      time_name: '第34周'
    }, {
      time_id: 'w035',
      time_name: '第35周'
    }, {
      time_id: 'w036',
      time_name: '第36周'
    }, {
      time_id: 'w037',
      time_name: '第37周'
    }, {
      time_id: 'w038',
      time_name: '第38周'
    }, {
      time_id: 'w039',
      time_name: '第39周'
    }, {
      time_id: 'w040',
      time_name: '第40周'
    }, {
      time_id: 'w041',
      time_name: '第41周'
    }, {
      time_id: 'w042',
      time_name: '第42周'
    }, {
      time_id: 'w043',
      time_name: '第43周'
    }, {
      time_id: 'w044',
      time_name: '第44周'
    }, {
      time_id: 'w045',
      time_name: '第45周'
    }, {
      time_id: 'w046',
      time_name: '第46周'
    }, {
      time_id: 'w047',
      time_name: '第47周'
    }, {
      time_id: 'w048',
      time_name: '第48周'
    }, {
      time_id: 'w049',
      time_name: '第49周'
    }, {
      time_id: 'w050',
      time_name: '第50周'
    }, {
      time_id: 'w051',
      time_name: '第51周'
    }, {
      time_id: 'w052',
      time_name: '第52周'
    }, {
      time_id: 'w053',
      time_name: '第53周'
    }
    ],
    selected: {},       //下拉框选中的项
    ec: {
      onInit: initChart
    },
    // 组件所需的参数
    nvabarData: {
      showCapsule: 0, //是否显示左上角返回图标   1表示显示    0表示不显示
      showEdit:0,//是否显示左上角编辑图标   1表示显示    0表示不显示
      showcancel:0,//是否显示左上角关闭图标   1表示显示    0表示不显示
      title: '账本', //导航栏 中间的标题
    },
    slideposition:"0",//0表示此时滑块在左边，1表示在右边
    incomecolor:"",
    expendcolor:"",
    yearbackcolor:"",
    yearcolor:"",
    yearborder:"none",//默认选中年，年无边框
    monthbackcolor:"",
    monthcolor:"",
    monthborder:"",
    weekbackcolor:"",
    weekcolor:"",
    weekborder:"",
    yearselect:"block",
    monthselect:"none",
    weekselect:"none",
    height: app.globalData.height * 2 + 20 , // 此页面 页面内容距最顶部的距离
  },  
  accountedit(e){
    console.log(e.detail+"  你触发了父组件的事件");
    wx.navigateTo({//注，无法跳转到tabbar绑定的界面
      url: '../testpage/testpage',
      success: function(res){},
      fail: function() {},
      complete: function() {}
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'getYearRecord',
      data:{
        type:type,
        Year:'2021',
      }
    }).then(res=>{
      yeardata=res.result
      chart.setOption(getOption())
      console.log(yeardata)
    })
  
    var i=[{//账单数据
      accountgroup:{
        date:"1月5号",
        vlheight:"340",
        onedayaccountheight:"420",
        account:[
          {
            type:"cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/餐饮.png",
            num:"200",
            remark:"奶茶",
          },
          {
            type:"cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/餐饮.png",
            num:"201",
            remark:"奶茶2",
          },
          {
            type:"cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/餐饮.png",
            num:"204",
            remark:"奶茶2",
          },
        ]
      },
    },
    {//账单数据
      accountgroup:{
        date:"1月6号",
        vlheight:"220",
        onedayaccountheight:"300",//每个区块的高度，这个可以根据脚本在数据库获取数据时，根据数据量动态设置高度 公式：
        account:[
          {
            type:"cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/餐饮.png",
            num:"200",
            remark:"火锅",
          },
          {
            type:"cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/餐饮.png",
            num:"201",
            remark:"奶茶2",
          },
        ]
      },
    },
  ];
  
  this.setData({costaccountlist:i});
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation({duration:300});
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  slidemove(){
    console.log("你点击了滑块",this.data.slideposition);
    if(type=='cRecord')
    {
      type='rRecord'
    }
    else{
      type='cRecord'
    }//还需要重新获取数据
    wx.cloud.callFunction({
      name:'getYearRecord',
      data:{
        type:type,
        Year:'2021',
      }
    }).then(res=>{
      yeardata=res.result
      chart.setOption(getOption())
      console.log(yeardata)
    })

    var px1 = 106 / pixelRatio1;
    if(this.data.slideposition==0){
    this.animation.translate(px1).step()
    this.setData({animation: this.animation.export()})
    this.setData({slideposition:1,incomecolor:"#FFFFFF",expendcolor:"#909090"})
  }
    else{
      this.animation.translate(0).step()
      this.setData({animation: this.animation.export()})
      this.setData({slideposition:0,incomecolor:"#909090",expendcolor:"#FFFFFF"})
    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  yearselect(e){
    console.log("你选择了逐年展示")
    this.setData({
      yearbackcolor:"#FFC8A1",
      yearcolor:"#FFFFFF",
      yearborder:"none",
      monthbackcolor:"#FFFFFF",
      monthcolor:"#909090",
      monthborder:"solid",
      weekbackcolor:"#FFFFFF",
      weekcolor:"#909090",
      weekborder:"solid",
      yearselect:"block",
      monthselect:"none",
      weekselect:"none"
    })
  },
  
  monthselect(e){
    console.log("你选择了逐月展示")
    this.setData({
      yearbackcolor:"#FFFFFF",
      yearcolor:"#909090",
      yearborder:"solid",
      monthbackcolor:"#FFC8A1",
      monthcolor:"#FFFFFF",
      monthborder:"none",
      weekbackcolor:"#FFFFFF",
      weekcolor:"#909090",
      weekborder:"solid",
      monthselect:"block",
      yearselect:"none",
      weekselect:"none"
    })
  },
  
  weekselect(e){
    console.log("你选择了逐年展示")
    this.setData({
      yearbackcolor:"#FFFFFF",
      yearcolor:"#909090",
      yearborder:"solid",
      monthbackcolor:"#FFFFFF",
      monthcolor:"#909090",
      monthborder:"solid",
      weekbackcolor:"#FFC8A1",
      weekcolor:"#FFFFFF",
      weekborder:"none",
      weekselect:"block",
      monthselect:"none",
      yearselect:"none"
    })
  },
  /**
   * 图表切换点击事件处理
   */
  handleChartChange(e) {
    let imagePie = '../../images/chartchange_pie.png';
    let imageLine = '../../images/chartchange_line.png';
    let optionPie = getOptionPie();
    let optionLine = getOption();
    let option;
    let {chartchange} = this.data;
    option = chartchange ? optionPie : optionLine;
    this.setData({
      chartchange: !chartchange,
      imageSrc: chartchange ? imageLine : imagePie
    })
    chart.setOption(option);
  },

  /**
   * 自定义事件bindchange的处理，select组件的数据传到这里
   */
  change (e) {
    this.setData({
      selected: { ...e.detail }
    })
    console.log({//弹出对话框
      title: `${this.data.selected.id} - ${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  /**
   * 点击其它地方时收起下拉框，绑定mainblock的点击事件
   */
  close () {
    // 关闭select
    this.selectComponent('#select').close()
  }
})

function initChart(canvas, width, height, dpr) {
    chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
  
    let option = getOption()  
  
    chart.setOption(option)

    return chart


}

function getOption(){
  return {
    tooltip:{ //点击tip弹窗样式更改
      trigger:'axis',
      backgroundColor:"white",
      color: "white",
      borderWidth: "1", //边框宽度设置1
      borderColor: "white", //设置边框颜色
      textStyle: {
        color: "black" //设置文字颜色
      },
      formatter :function(params){
        var tip="";
        if(params !=null && params.length>0)
        {
          for(var i=0;i<params.length;i++)
          {
            tip+="总支出："+params[i].value;
          }
        }
        return tip;
      }
    },
    grid:{
      y:10,
      y2:20,
      x:10,
      x2:10,
    },
    xAxis: {
      show: true,
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
            color: '#d3d7d4'
        }
    },
    axisLabel:{
      interval: 0
      },
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
      axisTick: {
        show: false,
      },
      axisLine:{       //y轴
        show:false

      },
      axisLabel:{
        show:false,
      },
      splitLine:{
          lineStyle:{
            type:"dashed",
            color: '#d3d7d4'
          }
      },
      type: 'value'
    },
    series: [{
      itemStyle : {

        normal : {
        
        color:'#d71345',
        
        lineStyle:{
        width: 3.5,
        color:'#f05b72'}
        
        }
        
        },
        areaStyle:{//背景渐变色设置
          normal:{
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

                  offset: 0,
                  color: '#f05b72'
              }, {
                  offset: .34,
                  color: '#f58f98'
              },{
                  offset: 1,
                  color: '#feeeed'
              }])

          }
      },
      symbolSize: 10, 
        data: yeardata,
        type: 'line',
        smooth: true
    }]
}
}

function getOptionPie(){
  let option = {
    color: ['#F6494C','#FEAE3F','#4E26B6','#6BDE8F','#457EF9'],
    xAxis: {
      show: false
    },
    tooltip: {
        trigger: 'item' 
    },
    legend: {
        textStyle: {
          fontSize: 28/pixelRatio1,
          fontFamily: 'Bahnschrift'
        },
        top: '15%',
        right: '7%',
        orient: 'vertical',
        icon: 'circle',
        formatter: function(name) {
          // 获取legend显示内容
          let data = option.series[0].data;
          let total = 0;
          let tarValue = 0;
          for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                  tarValue = data[i].value;
              }
          }
          let p = (tarValue / total * 100).toFixed(1);
          return name + ' ' + p + '%';
        },
      },
    series: [
        {
            type: 'pie', 
            radius: ['43%', '80%'],
            center: ['30%','50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderWidth: 1,
              borderColor:'#ffffff',
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: '',
                    formatter:'{c}\n(元)',
                    color:'#EE7364',
                    fontFamily: 'Bahnschrift'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {
                  value: 969.564, 
                  name: '搜索',
                  itemStyle: {
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
                  }},
                {
                  value: 735, 
                  name: '直接',
                  itemStyle: {
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
                  }
                },
                {
                  value: 580, 
                  name: '邮件',
                  itemStyle: {
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
                  }
                },
                {
                  value: 484, 
                  name: '联告',
                  itemStyle: {
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
                  }
                },
                {
                  value: 300, 
                  name: '视频',
                  itemStyle: {
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
                  }
                }
            ]
        }
    ]
  }
  return option;
}