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
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [20, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
}
}