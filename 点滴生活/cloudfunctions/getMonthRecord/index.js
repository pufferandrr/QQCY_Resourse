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
  var Month=event.Month;
  var data=new Array();
  if(Month=='2')
  {
    if((Year%4==0&&Year%100!=0)||Year%400==0)
    {
      for(i=0;i<29;i++)
      {
        data[i]=0;
      }
      for(i=1;i<=9;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-0'+i,
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
      for(i=10;i<=29;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-0'+i,
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
      return data;
    }
    else{
      for(i=0;i<28;i++)
      {
        data[i]=0;
      }
      for(i=1;i<=9;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-0'+i,
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
      for(i=10;i<=28;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-0'+i,
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
      return data;
    }
  }
  else{
    if(Month=='1'||Month=='3'||Month=='5'||Month=='7'||Month=='8')
    {
        for(i=0;i<31;i++)
        {
          data[i]=0;
        }
        for(i=1;i<=9;i++)
        {
          await db.collection(type).where($.and([
            {
              userid:wxContext.OPENID,
            },
            {
              createTime:db.RegExp({
                regexp:Year+'-0'+Month+'-0'+i,
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
        for(i=10;i<=31;i++)
        {
          await db.collection(type).where($.and([
            {
              userid:wxContext.OPENID,
            },
            {
              createTime:db.RegExp({
                regexp:Year+'-0'+Month+'-0'+i,
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
        return data;
    }
    else if(Month=='10'||Month=='12')
    {
      for(i=0;i<31;i++)
      {
        data[i]=0;
      }
      for(i=1;i<=9;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-0'+i,
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
      for(i=10;i<=31;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-'+i,
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
      return data;
    }
    else if(Month=='11')
    {
      for(i=0;i<30;i++)
      {
        data[i]=0;
      }
      for(i=1;i<=9;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-0'+i,
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
      for(i=10;i<=30;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-'+i,
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
      return data;
    }
    else{
      for(i=0;i<30;i++)
      {
        data[i]=0;
      }
      for(i=1;i<=9;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-0'+i,
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
      for(i=10;i<=30;i++)
      {
        await db.collection(type).where($.and([
          {
            userid:wxContext.OPENID,
          },
          {
            createTime:db.RegExp({
              regexp:Year+'-0'+Month+'-0'+i,
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
      return data;
    }
  }
  
}