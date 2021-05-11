// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('user').add({
    data:{
      userDuration:"0",
      userlimit:["",0],//这个l的大小写需要注意一下
      userTotalDays:"0", 
      userid:wxContext.OPENID
    }
  })
}