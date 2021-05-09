// components/notesNavbar/notesnavbar.js
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
  
    height: '',
    navbarData: {
      //图片路径，从数据库获取
      iconpath: "cloud://cloud1-2g1cvw78a2d7648f.636c-cloud1-2g1cvw78a2d7648f-1305707823/mood-icon/8.png",
      //日记日期
      notedate: "2020-10-07",
    },
    
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: 80
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 返回上一页面
    _navback(event) {
      console.log("you click back");
      this.triggerEvent('navback');
    },

  }
})
