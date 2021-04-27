// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var type;
  if(event.type === 1){
    type = "ctype"
  }else if(event.type === 2){
    type = "rtype"
  }
  return await db.collection(type).get()
}