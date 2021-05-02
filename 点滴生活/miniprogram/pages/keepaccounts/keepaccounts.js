// pages/keepaccounts/keepaccounts.js
import * as echarts from '../../components/hb/ec-canvas/echarts';

const app = getApp()
let chart =null;

var pixelRatio1 = 750 / wx.getSystemInfoSync().windowWidth;   

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartchange: true,  //图表改变判断，true为折线图，false为饼图
    imageSrc: '../../images/chartchange_pie.png',//图表切换图标的url
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
    })
  },
  /**
   * 图表切换点击事件处理
   */
  handleChartChange(e) {
    let imagePie = '../../images/chartchange_pie.png';
    let imageLine = '../../images/chartchange_line.png';
    let optionPie = {
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
            let p = (tarValue / total * 100).toFixed(0);
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
        data: [20, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
}
}