// pages/keepaccounts/keepaccounts.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 0, //是否显示左上角返回图标   1表示显示    0表示不显示
      showEdit:0,//是否显示左上角编辑图标   1表示显示    0表示不显示
      showcancel:0,//是否显示左上角关闭图标   1表示显示    0表示不显示
      title: '账本', //导航栏 中间的标题
    },
    accountlist:[{//账单数据
      accountgroup:{
        date:"1月5号",
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
  ],
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