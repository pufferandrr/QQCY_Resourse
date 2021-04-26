// components/hb/limitprogress.js


var isFirst = true;

var isSiFirst = true;

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    progresscolor : "#FFC8A1",
    percent : 0,
    noticetext : "还在计划之中，但也不要挥霍呀~",
    isSi: true,
  },
  attached: function (options) {
    wx.cloud.callFunction({
      name:'getLimit',
    }).then(res=>{
      this.setData({
        percent : (res.result[1]/res.result[0])*100
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
