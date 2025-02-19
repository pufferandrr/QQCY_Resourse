// pages/mycenter/notificationlist.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nvabarData: {
      showCapsule: 1, //是否显示左上角返回图标   1表示显示    0表示不显示
      showEdit: 0,//是否显示左上角编辑图标   1表示显示    0表示不显示
      showcancel: 0,//是否显示左上角关闭图标   1表示显示    0表示不显示
      title: '我的通知', //导航栏 中间的标题
    },
    list: 0,
  },

  backToMycenter(){
    wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('user').get()
      .then(res=>{
        console.log("成功",res)
        this.setData({
          list: res.data
        }
        )
      })
      .catch(err=>{
        console.log("失败", err)
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