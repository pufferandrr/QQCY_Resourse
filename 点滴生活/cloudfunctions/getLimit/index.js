// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var limit = new Array();
  await db.collection("user")
  .where({
    userid:"test01"
  })
  .get()
  .then(res=>{
    limit = res.data[0].userlimit
  })
  return limit
}