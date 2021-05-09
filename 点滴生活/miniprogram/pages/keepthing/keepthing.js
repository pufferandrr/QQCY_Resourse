
const app = getApp()
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
    height: app.globalData.height * 2 + 20 , // 此页面 页面内容距最顶部的距离
    inputBottom: 30,   //bottom_menu的位置
    content: '',     //记事内容
    picId:[],     //图片

    //是否显示心情
    flag: false,

    //心情图片
    moods:[
      {
        imgPath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/8.png",
        imgId: "mood8",
      },
      {
        imgPath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/7.png",
        imgId: "mood7",
      },
      {
        imgPath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/6.png",
        imgId: "mood6",
      },
      {
        imgPath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/5.png",
        imgId: "mood5",
      },
      {
        imgPath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/4.png",
        imgId: "mood4",
      },
      {
        imgPath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/3.png",
        imgId: "mood3",
      },
      {
        imgPath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/2.png",
        imgId: "mood2",
      },
      {
        imgPath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/1.png",
        imgId: "mood1",
      },
    ]
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

      //获取当前时间
      var today = new Date();
      var todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      let nav = this.selectComponent('#nav');
      nav.setData({
        ['navbarData.notedate']: todayDate,
      })

  },

  backToNoteslist(){
    wx.navigateBack();   //返回上一级
  },

  //输入标题
  inputTitle: function() {
    this.setData({
      flag: false,
    })
  },

  //输入框获取焦点，获取键盘高度
  inputFocus(e) {
    this.setData({
      inputBottom: e.detail.height*2 - 10,
      flag: false,
    })
  },
  
  //失去焦点，位置下移
  inputBlur(e) {
    var that = this;
    this.setData({
      content: e.detail.value,
      inputBottom: 0,
      flag: false,
    })
  },

  //发布成功跳转到文章列表
  toNoteslist: function() {
    wx.switchTab({
      url: '../keepthing/noteslist',
      flag: false,
    })
  },

  //选择要上传的图片
  selectImg: function(){
    this.upload.addPic();
    this.setData({
      flag: false,
    })
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

  //弹出按钮选择心情
  selectMood: function (e) {
    this.setData({
      flag: true,
      inputBottom: 320,
    })
  },

  //选中心情
  thisMood: function(e) {
    var url = e.currentTarget.dataset.url;
    let nav = this.selectComponent('#nav');
      nav.setData({
        ['navbarData.iconpath']: url,
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