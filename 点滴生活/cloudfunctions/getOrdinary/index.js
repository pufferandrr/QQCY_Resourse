// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    //结果集
    var ordinary = new Array();
    //获取登录的openid
    let { OPENID } = cloud.getWXContext()
    await db.collection('diary').where({
        userid: 'oxmoK5iLdJN3LwnL9zathV1Iqvzw'
    })
    .get()
    .then(res=>{
        console.log(res.data)
        ordinary = res.data
    })
    return ordinary
}