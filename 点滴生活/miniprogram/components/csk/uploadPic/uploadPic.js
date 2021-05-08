// components/csk/uploadPic/uploadPic.js
const db = wx.cloud.database();

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
    hide:false,
    picBox:[],//图片上传暂存地址，预览需要使用
    picId:[]//图片上传后从云端数据中返回的id值，用于一会存入数据库中
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    preview:function(e){
      var url = e.currentTarget.dataset.src;
      wx.previewImage({
        current:url,
        urls: this.data.picBox,
      })
    },

    imgDelete1: function (e) {
      let that = this;
      let index = e.currentTarget.dataset.index;
      let picBox = this.data.picBox;
      picBox.splice(index, 1)
      that.setData({
        picBox: picBox
      });
    },
    addPic:function(e){
      var Box = this.data.picBox;//创建用于添加暂存图片的数组
      var n = 9;//设置默认可以上传的图片数
      var context = this;
      if(9>Box.length > 0){
        n = n-Box.length;//可以上传的图片数等于总共可以上传的减去已添加的
      }else{
        n=0;
      }
      wx.chooseImage({
        count: n,
        success:function(res){
          var tempFilePaths = res.tempFilePaths;
          if(Box.length == 0){
            Box = tempFilePaths;
          }else if(9 > Box.length){
            Box = Box.concat(tempFilePaths);
          }
          context.setData({
            picBox:Box
          });
        }   
      })
    },

     uploadPics:async function(res){
      if(!this.data.picBox.length){
        wx.showToast({
          title: '还未选择图片',
          icon:'error'
        })
      }else{
        wx.showLoading({
          title: '正在上传',
          mask:true
        })
        let promiseArr = [];
        for (let index = 0; index < this.data.picBox.length; index++) {
          promiseArr.push(new Promise((reslove,reject)=>{
            let item = this.data.picBox[index];
            let suffix = /\.\w+$/.exec(item)[0];//正则表达式返回文件的扩展名
            wx.cloud.uploadFile({
              cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
              filePath: item,
              success: res=>{
                this.setData({
                  picId:this.data.picId.concat(res.fileID)
                })
                reslove();
              },
              fail: res=>{
                wx.hideLoading();
                wx.showToast({
                  title: "上传失败",
                })
              }
            })
          }))
        }
        return await Promise.all(promiseArr).then(res=>{
          wx.hideLoading();
          wx.showToast({
            title: "上传成功",
          })
          this.setData({
            picBox: []//清空图片框
          })
          return this.data.picId;
        })
      }
      return [];
    }
  }
})
