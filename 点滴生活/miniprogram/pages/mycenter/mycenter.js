// pages/mycenter/mycenter.js

const app = getApp()
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    userInfo:{
      nickName:"",  //用户昵称
      avatorUrl:"",  //用户头像
    },
    height: app.globalData.height * 2 + 20 , // 此页面 页面内容距最顶部的距离
  },

  onLoad(option){
    console.log(option)
  },
  toNotification:function(){
    wx.navigateTo({
      url: 'notificationlist'
    })
  },
  toRelease:function(){
    wx.navigateTo({
      url: 'release',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
   
  },
  swInput: function (e) {

    this.setData({
    
    sw: e.detail.value
    
    })
    
    },

  pcInput: function (e) {

    this.setData({
    
    pc: e.detail.value
    
    })
    
    },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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