// pages/keepthing/notesdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 组件所需的参数
    navbarData: {
      //图片路径，从数据库获取
      iconpath: "",
      //日记日期
      notedate: ""
    },

    //做需要的数据
    note_mood:'',
    note_day:'...',
    note_week:'...',
    note_year:'...',
    note_month:'...',
    note_title:'...',
    note_content:'...'
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const{ mood,day,week,year,month,title,content,} = options;
    this.setData({
      note_content: content,
      note_day: day,
      note_month: month,
      note_mood: mood,
      note_title: title,
      note_week: week,
      note_year: year,
    })
  },
  backToNoteslist(){
    wx.navigateBack();   //返回上一级
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