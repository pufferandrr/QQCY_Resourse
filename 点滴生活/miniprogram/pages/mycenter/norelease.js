// pages/mycenter/notificationlist.js
const db = wx.cloud.database();
const app = getApp();


// 发布浏览最长字数
const maxLenth = 180
var pixelRatio1 = 750 / wx.getSystemInfoSync().windowWidth;   
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nvabarData: {
      showCapsule: 1, //是否显示左上角返回图标   1表示显示    0表示不显示
      showEdit: 0,//是否显示左上角编辑图标   1表示显示    0表示不显示
      showcancel: 0,//是否显示左上角关闭图标   1表示显示    0表示不显示
      title: '我的发布', //导航栏 中间的标题
    },
    slideposition:"0",//0表示此时滑块在左边，1表示在右边
    incomecolor:"",
    expendcolor:"",
    chosenList:[],
    releaselist:[
      {
        time:"2021-04-08 12.12",
        type:"未审核",
        content:"省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招"
      },
      {
        time:"2021-04-08 12.12",
        type:"未审核",
        content:"省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招"
      },
      {
        time:"2021-04-08 12.12",
        type:"未审核",
        content:"省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招"
      },
      {
        time:"2021-04-08 12.12",
        type:"未审核",
        content:"省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招省钱小妙招"
      }
    ]
  },

  backToMycenter(){
    wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getChosen()
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
    var px1 = 126 / pixelRatio1;
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
  getChosen(){
    
    
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