const app = getApp()
Component({
  properties: {
    navbarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {
      },
      observer: function (newVal, oldVal) {}
    },
  },
  data: {
    height: '',
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1,
      showEdit:1,
      showcancel:1,
    },
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.height
    })
  },
  methods: {
    // 返回上一页面
    _navback(event) {
      console.log("you click back");
      this.triggerEvent('navback');
    },
    _navedit(event){
      console.log("you click edit ");
      //跳转的函数
      this.triggerEvent('navedit');
    },
    _navcalcel(event){
      console.log("you click cancel");
      this.triggerEvent('navcancel')
    }
  }
})