// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    //结果集
    var ordinary = new Array();
    await db.collection('diary').where({
        //根据用户id获取
        userid: wxContext.OPENID
    })
    .get()
    .then(res=>{
        console.log(res.data)
        ordinary = res.data
    })
    return ordinary
}