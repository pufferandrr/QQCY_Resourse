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
    type:[],
    keyNumber:[7,8,9,'日期',4,5,6,'+',1,2,3,'-','.',0,'删除','确认'],
    arrayn:[],
    numberText:'',
    isShow:false,
    selectedType:'',
    selectedTypeUrl:'',
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
  returnA:function(){
    var now = new Date();
    var year = now.getFullYear();
    var mouth = now.getMonth()+1;
    var day = now.getDate();
    console.log(year+'-'+mouth+'-'+day);
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
  keyboardTap:function(e){
    let val = e.currentTarget.dataset.value;
    switch(val){
      case '删除':
        arrval.pop();
        this.setData({
          arrayn:arrval,
          numberText:arrval.join('')
        })
        break;
      case '日期':
        break;
      case '+':
        if(arrval.length==0){
          arrval.push(val);
          this.setData({
            arrayn:arrval,
            numberText:arrval.join(''),
          })
        }
        break;
      case '-':
        if(arrval.length==0){
          arrval.push(val);
          this.setData({
            arrayn:arrval,
            numberText:arrval.join(''),
          })
        }
        break;
      case '.':
        if(arrval.length!=0&&!arrval.includes('.')){
          arrval.push(val);
          this.setData({
            arrayn:arrval,
            numberText:arrval.join(''),
          })
        }
        break;
      case '确认':
        
        break;
      default:
        arrval.push(val)
        var reg = new RegExp("(^[-|+]?[0-9]{1,7}$)|(^[-|+]?[0-9]{1,7}[\.]{1}[0-9]{1,2}$)")
        if(reg.test(arrval.join(''))){
          this.setData({
            arrayn:arrval,
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
    wx.cloud.callFunction({
      name:"getType",
      data:{
        "type": 1,
      }
    }).then(res=>{
      this.setData({
        type:res.result.data
      })
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