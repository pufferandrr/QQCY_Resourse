// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init();
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()

   return  await db.collection('diary').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          title:event.title,
          content:event.content,
          year:event.year,
          week:event.week,
          day:event.day,
          month:event.month,
          mood:event.mood,
          userid:wxContext.OPENID,
        },
        success: function(res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log(res)
        }
    })

}