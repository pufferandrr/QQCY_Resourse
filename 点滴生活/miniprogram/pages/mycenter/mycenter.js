// pages/mycenter/mycenter.js

const app = getApp()
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    userInfo:{
      nickName:"用户昵称",  //用户昵称
      avatarUrl:"../../images/moren2.jpg",  //用户头像
    },
    height: app.globalData.height * 2 + 20 , // 此页面 页面内容距最顶部的距离
    // 用户基本数据
    userData:{
      continuous:'-', //连续记账天数
      total:'-', //记账总天数
      accounts:'-', //记账总笔数
    },
    limit:'',
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    if(!this.data.hasUserInfo){
       wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.cloud.callFunction({
          name:'addUser',
          data:{
            userPic:this.data.userInfo.avatarUrl,
            userName:this.data.userInfo.nickName
          }
        })
      }
    })
    }
   
  },

  setLimit:function(e){//设置月消费额度
    console.log(e.detail.value);
    wx.cloud.callFunction({
      name:'setLimit',
      data:{
        limit:e.detail.value
      }
    }).then(res=>{
      console.log(res);
    })
  },

  onLoad(option){
    
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
    var userInfo 
    wx.cloud.callFunction({
      name:'getLimit',
    }).then(res=>{
      this.setData({
        limit:res.result[0]
      })
    })

    //目前阶段getUser云函数目前只搜索openid为test01的用户
    wx.cloud.callFunction({
      name: 'getUser',
    }).then(res=>{
      console.log(res.result)
      userInfo = res.result.user
      console.log(userInfo)
      if(userInfo!=null){
        this.setData({
          'userData.total': userInfo.userTotalDays,
          'userData.continuous': userInfo.userDuration,
          'userData.accounts': res.result.accounts
        })
      }
    })
    
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