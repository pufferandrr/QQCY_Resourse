// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const $ = db.command.aggregate;

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var type=event.type
  var Year=event.Year;
  var data=new Array();
  for(i=0;i<12;i++)
  {
    data[i]=0;
  }
  console.log(wxContext.OPENID)
  for(i=1;i<=9;i++){
  await db.collection(type).where($.and([
    {
      userid:wxContext.OPENID,
    },
    {
      createTime:db.RegExp({
        regexp:Year+'-0'+i+'-.*',
        options:'i',
      })
    }
  ])).limit(10000).get()
  .then(res=>{
    console.log(res);
    for(j=0;j<res.data.length;j++)
    {
      data[i-1]+=res.data[j].number
    }
    console.log(data[i-1]);
  })
}
for(i=10;i<=12;i++){
  await db.collection("cRecord").where($.and([
    {
      userid:wxContext.OPENID,
    },
    {
      createTime:db.RegExp({
        regexp:Year+'-'+i+'-.*',
        options:'i',
      })
    }
  ])).limit(10000).get()
  .then(res=>{
    console.log(res);
    for(j=0;j<res.data.length;j++)
    {
      data[i-1]+=res.data[j].number
    }
    console.log(data[i-1]);
  })
}
  return data
}