// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const $ = db.command.aggregate;

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var type=event.type;
  var Year=event.Year;
  var Week=parseInt(event.Week);
  var data=new Array();
  for(i=0;i<7;i++)
  {
    data[i]=0;
  }
  for(i=0;i<=6;i++)
  {
    await db.collection(type).where($.and([
      {
        userid:wxContext.OPENID,
        weeks:Week,
        week:i,
      },
      {
        createTime:db.RegExp({
          regexp:Year+'-.*',
          options:'i',
        })
      }
    ])).limit(10000).get()
    .then(res=>{
      console.log(res);
      for(j=0;j<res.data.length;j++)
      {
        data[i]+=res.data[j].number
      }
      console.log(data[i]);
    })
  }

  return data;
}