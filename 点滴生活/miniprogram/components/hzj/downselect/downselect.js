// components/hzj/downselect/downselect.js
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
    showlist:"none",
    selectlist:[{
      text:1,
    },{
      text:2,
    },{
      text:3,
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selecttap(){
      console.log("点我");
      if(this.data.showlist=="none")this.setData({showlist:"block"});
      else this.setData({showlist:"none"});
    }
  }
})
