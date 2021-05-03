// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var data
  console.log(wxContext.OPENID)
  await db.collection("cRecord").where(
  {
    userid:wxContext.OPENID,
  }).get()
  .then(res=>{
    data=res.data[0].number
    console.log(data)
  })
  return data
}