// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var type;
  if(event.switchType==1){
    type = 'cRecord';
  }else{
    type = 'rRecord'
  }
  var num = parseFloat(event.number);
  console.log(event.createTime);
  console.log(event.number);
  console.log(num);
  return await db.collection(type).add({
    data:{
      number:num,
      createTime:event.createTime,
      remark:event.remark,
      typeid:event.typeid,
      userid:wxContext.OPENID,
    }
  })
}