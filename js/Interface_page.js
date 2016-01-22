/**
 * Created by admin on 2016/1/22.
 */

$(document.body).ready(function(){
    $("#search").bind("click",function(ev){
        var searchdata=DataFiltermanager(tem,$("#txt").val());
        initJsonData(searchdata)
    });
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
    function initJsonData(_aprovedata){
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
})