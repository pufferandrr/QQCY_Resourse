const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 0, //是否显示左上角返回图标   1表示显示    0表示不显示
      showEdit:1,//是否显示左上角编辑图标   1表示显示    0表示不显示
      showcancel:0,//是否显示左上角关闭图标   1表示显示    0表示不显示
      title: '小日常', //导航栏 中间的标题
    },
    height: app.globalData.height * 2 + 20 , // 此页面 页面内容距最顶部的距离

    
      noteslist:[
        {
          mood:'../../images/mood1@3x.png',
          day:'08',
          week:'周四',
          year:'2021',
          month:'04',
          title:'这是一个严谨的标题',
          content:'一个不重要的日记内容??'
        },
        {
          mood:'../../images/mood1@3x.png',
          day:'08',
          week:'周四',
          year:'2021',
          month:'04',
          title:'这是一个严谨的标题',
          content:'一个不重要的日记内容??'
        },
        {
          mood:'../../images/mood1@3x.png',
          day:'08',
          week:'周四',
          year:'2021',
          month:'04',
          title:'这是一个严谨的标题',
          content:'一个不重要的日记内容??'
        },
        {
          mood:'../../images/mood1@3x.png',
          day:'08',
          week:'周四',
          year:'2021',
          month:'04',
          title:'这是一个严谨的标题',
          content:'一个不重要的日记内容??'
        },
        {
          mood:'../../images/mood1@3x.png',
          day:'08',
          week:'周四',
          year:'2021',
          month:'04',
          title:'这是一个严谨的标题',
          content:'一个不重要的日记内容??'
        }
      ],
    
  },

  /**
   * 生命周期函数--监听页面加载
  */

  onLoad: function() {
    //调取云函数
    wx.cloud.callFunction() ({
      name: 'getOrdinary'
    }).then(res=>{
        console.log(res)
        this.setData ({
          noteslist: res.data,
          datas:res.data
        })
    })
  },

  toKeepthing(){
    wx.navigateTo({
      url: '../keepthing/keepthing',
    })
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