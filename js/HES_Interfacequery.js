/**
 * Created by Mr_hu on 2016/1/20.
 */
$(document.body).ready(function(){
    //initJsonData(HSE_aprovedata);
    RadioHandle(HSE_aprovedata,"1")
    $("#btnQuery").bind("click",function(ev){
        var searchdata=DataFiltermanager(HSE_aprovedata,$("#txtsearchtext").val());
        initJsonData(searchdata)
    });
    $(".radbtn").bind("click",function(){
      var radvalue=$(this).attr("value");
      if(radvalue=="comm"){
          RadioHandle(HSE_aprovedata,"1")
      }else if(radvalue=="custom"){
          RadioHandle(HSE_aprovedata,"2")
      }
    })
})

//模拟请求json数据
function initJsonData(_aprovedata){
    //var dataroot="data/aprove.js";
    //$.getJSON(dataroot,function(data){
    //    var tabledta=data
    //});
    var tabledata=_aprovedata;
    var tablecontenthtml=" <tr style='background-color: #ededed'><td rowspan='2'>接口名称</td> <td rowspan='2'>接口申请内容</td> <td rowspan='2'>数据源名称</td> <td rowspan='2'>实体名称</td> <td colspan='2'>参数</td> </tr> <tr style='background-color: #ededed'> <td >参数名称</td> <td >参数类型</td> </tr>";
    for(var i=0;i<tabledata.length;i++){
        tablecontenthtml+="<tr>" +
        "<td>"+tabledata[i].name+"</td>" +
        "<td>"+tabledata[i].aproveconten+"</td>" +
        "<td>"+tabledata[i].datasetname+"</td>" +
        "<td>"+tabledata[i].entityname+"</td>" +
        "<td>"+tabledata[i].paramname+"</td>" +
        "<td>"+tabledata[i].paramtype+"</td>" +
        "</tr>"
    }
    $("#tab").html(tablecontenthtml)
}

//模糊查询
function DataFiltermanager(data,_text){
    var tempdata=[];
    for(var i=0;i<data.length;i++){
        for(var item in data[i]){
            if(data[i][item]!=null && (data[i][item]+"").indexOf(_text)>-1){
                tempdata.push(data[i]);
                break;
            }
        }
    }
    return tempdata;
}

//单选按钮处理事件
function RadioHandle(typedata,typenum){
   var handletypedata=[];
   for(var i=0;i<typedata.length;i++){
       if(typenum=="1"){
           if(typedata[i].type=="1"){
               handletypedata.push(typedata[i]);
           }
       }else{
           if(typedata[i].type=="2"){
               handletypedata.push(typedata[i]);
           }
       }
   }
    initJsonData(handletypedata);
}
