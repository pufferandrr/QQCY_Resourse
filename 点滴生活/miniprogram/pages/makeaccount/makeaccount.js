// miniprogram/pages/makeaccount/makeaccount.js
const app = getApp()
const db = wx.cloud.database();
let arrval = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nvabarData: {
      showCapsule: 1, //是否显示左上角返回图标   1表示显示    0表示不显示
      showEdit:0,//是否显示左上角编辑图标   1表示显示    0表示不显示
      showcancel:0,//是否显示左上角关闭图标   1表示显示    0表示不显示
      title: '记账', //导航栏 中间的标题
    },
    height: app.globalData.height * 2 + 20 , // 此页面 页面内容距最顶部的距离
    switchType:1,
    ctype:[{des:"餐饮",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/餐饮.png"},
           {des:"交通",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/交通.png"},
          {des:"医疗",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/医疗.png"},
          {des:"服装",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/服装.png"},
          {des:"娱乐",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/娱乐.png"},
          {des:"投资",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/投资.png"},
          {des:"学业",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/学业.png"},
          {des:"捐赠",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/捐赠.png"},
          {des:"购物",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/购物.png"},
          {des:"美妆",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/美妆.png"},
          {des:"其他",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/其他.png"}],
    rtype:[{des:"投资",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/投资.png"},
          {des:"工资",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/工资.png"},
          {des:"其他",url: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/其他.png"}],
    keyNumber:[7,8,9,'日期',4,5,6,'+',1,2,3,'-','.',0,'删除','确认'],
    numberText:'',
    isShow:false,
    selectedType:'',
    selectedTypeUrl:'',
    date:'',
    remark:'',
  },
  switchT:function(){
    switch (this.data.switchType) {
      case 1:
        this.setData({
          switchType:2,
          selectedType:'',
          selectedTypeUrl:'',
          numberText:'',
        })
        arrval = []
        break;
      default:
        this.setData({
          switchType:1,
          selectedType:'',
          selectedTypeUrl:'',
          numberText:'',
        })
        arrval = []
        break;
    }
  },
  hideKeyboard:function(){
    this.setData({
      isShow:false,
    })
  },
  showKeyboard:function(){
    this.setData({
      isShow:true,
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  remarkChange:function(e){
    this.setData({
      remark:e.detail.value,
    })
  },
  returnA:function(){
    // var now = new Date();
    // var year = now.getFullYear();
    // var mouth = now.getMonth()+1;
    // var day = now.getDate();
    // console.log(year+'-'+mouth+'-'+day);
    wx.navigateBack();
  },
  selectType:function(e){
    var des = e.currentTarget.dataset.value;
    var url = e.currentTarget.dataset.url;
    this.setData({
      selectedType:des,
      selectedTypeUrl:url,
    })
  },
  addbill:function(){
    if(this.data.date==''){
      var now = new Date();
      var year = now.getFullYear();
      var mouth = now.getMonth()+1;
      var day = now.getDate();
      this.setData({
        date:year+'-'+mouth+'-'+day
      })
    }
    console.log(this.data.numberText);
    console.log(this.data.selectedTypeUrl);
    console.log(this.data.remark);
    console.log(this.data.date);
    console.log(this.data.switchType);
    wx.showLoading({
      title: '正在添加',
    })
    wx.cloud.callFunction({
      name:'addRecord',
      data:{
        'number':this.data.numberText,
        'createTime':this.data.date,
        'remark':this.data.remark,
        'typeid':this.data.selectedTypeUrl,
        'switchType':this.data.switchType,
      }
    }).then(res=>{
      wx.hideLoading({
        success: (res) => {
          wx.navigateBack()
        },
      })
      console.log(res);
    })

  },
  keyboardTap:function(e){
    let val = e.currentTarget.dataset.value;
    switch(val){
      case '删除':
        arrval.pop();
        this.setData({
          numberText:arrval.join('')
        })
        break;
      case '日期':
        break;
      case '+':
        if(arrval.length==0){
          arrval.push(val);
          this.setData({
            numberText:arrval.join(''),
          })
        }
        break;
      case '-':
        if(arrval.length==0){
          arrval.push(val);
          this.setData({
            numberText:arrval.join(''),
          })
        }
        break;
      case '.':
        if(arrval.length!=0&&!arrval.includes('.')){
          arrval.push(val);
          this.setData({
            numberText:arrval.join(''),
          })
        }
        break;
      case '确认':
        if(this.data.selectedType==''){
          wx.showToast({
            title: '请选择支出类型',
            icon:'error',
          })
        }else if(this.data.numberText==''){
          wx.showToast({
            title: '请输入记录金额',
            icon:'error',
          })
        }else{
          this.addbill();
        }
        break;
      default:
        arrval.push(val)
        var reg = new RegExp("(^[-|+]?[0-9]{1,7}$)|(^[-|+]?[0-9]{1,7}[\.]{1}[0-9]{1,2}$)")
        if(reg.test(arrval.join(''))){
          this.setData({
            numberText:arrval.join('')
          })
        }else{
          arrval.pop();
        }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.cloud.callFunction({
    //   name:"getType",
    //   data:{
    //     "type": 1,
    //   }
    // }).then(res=>{
    //   this.setData({
    //     type:res.result.data
    //   })
    //   console.log(this.data.type);
    // })
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