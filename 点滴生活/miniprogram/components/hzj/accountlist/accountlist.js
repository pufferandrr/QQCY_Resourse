// components/hzj/accountlist/accountlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    accountlist:{
      type:Object,
      value:{
        accountgroup:[{
          date:"",
          account:[
            {
              type:"",
              num:"",
              remark:""
            },
            {
              type:"",
              num:"",
              remark:""
            }
          ]
        },]
      },
    },
    accounttype:{
      type:Object,
      value:{

      }
    },//判断收入或支出 0支出，1收入
  },
  /**
   * 组件的初始数据
   */
  data: {
    accountlist:{
      accountgroup:[{
        date:"1M1d",
        account:[
          {
            type:"1",
            num:"200",
            remark:"奶茶",
          },
          {
            type:"2",
            num:"201",
            remark:"奶茶2",
          },
          {
            type:"2",
            num:"204",
            remark:"奶茶2",
          },
          {
            type:"2",
            num:"211",
            remark:"奶茶2",
          },
          {
            type:"2",
            num:"2501",
            remark:"奶茶2",
          }
        ]
      },
    ]
    },
    accountType:"0"
  },
  attached: function () {
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }

})
