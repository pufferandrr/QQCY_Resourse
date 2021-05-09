
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件所需的参数
    nvabarData: {
      //图片路径，从数据库获取
      iconpath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/8.png",
      //日记日期
      notedate: "2020-10-07"
    },
    height: app.globalData.height * 2 + 20 , // 此页面 页面内容距最顶部的距离
    inputBottom: 30,   //bottom_menu的位置
    content: '',     //记事内容
    pcId: [],     //图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar({
      animation: true,    //隐藏底部导航栏
    })

    this.upload = this.selectComponent("#uploadPic");
      this.upload.setData({
        hide:false          //hide为true表示隐藏预览
      })
  },

  backToNoteslist(){
    wx.navigateBack();   //返回上一级
  },

  //输入框获取焦点，获取键盘高度
  inputFocus(e) {
    this.setData({
      inputBottom: e.detail.height*2 - 10
    })
  },
  
  //失去焦点，位置下移
  inputBlur(e) {
    var that = this;
    this.setData({
      content: e.detail.value,
      inputBottom: 0
    })
  },

  //发布成功跳转到文章列表
  toNoteslist: function() {
    wx.switchTab({
      url: '../keepthing/noteslist',
    })
  },

  //选择要上传的图片
  selectImg: function(){
    this.upload.addPic();
  },

  //上传图片
  uploadImg: function(){
    this.upload.uploadPics().then(res=>{
      this.setData({
        picId:this.data.picId.concat(res)
      })
      this.upload.setData({
        picId:[],
      })
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