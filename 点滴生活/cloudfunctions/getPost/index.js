// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var openid = 'test01'
  var chosen 
  //state为1表示文章已入选, 0表示未入选
  var state = event.state
  //var openid = wxContext.OPENID
  await db.collection('post')
  .where({
    state:state,  
    userid:openid,
  })
  .get()
  .then(res=>{
    chosen = res.data
  })
  return chosen
}