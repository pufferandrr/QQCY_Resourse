// components/cskkey/cskkey.js
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
    keyNumber:[7,8,9,'日期',4,5,6,'+',1,2,3,'-','.',0,'删除','确认'],
    arrayn:[],
    numberText:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    }
  }
})
