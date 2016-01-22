/**
 * Created by Mr_hu on 2016/1/19.
 */
$(document.body).ready(function(){
    initJsonData();
   $("#btnevent").find("div").bind("click",function(){
       var btnvalue=$(this).attr("value");
       if(btnvalue=="审批"){
           popit();
         //  $("#mydiv").css("left",(document.body.clientWidth-$("#mydiv").width())/2)
       }else if(btnvalue=="接口配置"){

       }


   })
    $("#past").bind("click",function(){
            $("#"+approve).text("已审批");
            $("#"+approve).css({"background-color":"#ececec","color":"black"});
    })
    $("#nopast").bind("click",function(){
        parent.mydiv.style.display = parent.coverdiv.style.display = 'none';
    })
    $("#yes").bind("click",function(){
        $("#"+approve).text("已配置");
        $("#"+approve).css({"background-color":"#ececec","color":"black"});
    })
    $("#no").bind("click",function(){
        parent.config.style.display = parent.coverdiv.style.display = 'none';
    })

})

//模拟请求json数据
function initJsonData(){
    //var dataroot="data/aprove.js";
    //$.getJSON(dataroot,function(data){
    //    var tabledta=data
    //});
    var tabledata=approvedata;
    var tablecontenthtml="<tr style='background-color: #ededed'><td>编号</td><td>时间</td><td>申请内容</td><td>审批内容</td><td>申请企业</td><td>申请人</td><td>操作</td></tr>";
    for(var i=0;i<tabledata.length;i++){
        tablecontenthtml+="<tr>" +
             "<td>"+tabledata[i].num+"</td>" +
             "<td>"+tabledata[i].datetime+"</td>" +
             "<td>"+tabledata[i].applycontent+"</td>" +
             "<td>"+tabledata[i].approvecontent+"</td>" +
             "<td>"+tabledata[i].applycompany+"</td>" +
             "<td>"+tabledata[i].applypeople+"</td>" +
             "<td>"+
                  "<div id='btnevent_"+i+"' style='display: -webkit-box;-webkit-box-orient: horizontal;margin-right: -90px;'>"+
                  "<div id='approve_"+i+"' value='审批' onclick='btneventmanager(this)' flag='1' class='commbtnstyle'>审批</div>" +
                  "<div id='configration_"+i+"' value='接口配置' onclick='configration(this)' flag='2' class='commbtnstyle'>接口配置</div>" +
                  "<div class='synchro_configure'>同步配置</div>" +
                  "</div></td>" +
            "</tr>"
    }
    $("#tab1").html(tablecontenthtml)
}
var approve=null;
var flag=null;
function btneventmanager(ev){
    flag=$(ev).attr("flag");
    approve=ev.id;
    if($("#"+approve).text()!="已审批"){
        popit();
       // $("#mydiv").css("left",(document.body.clientWidth-$("#mydiv").width())/2)
    }
}
function configration(ev){
    flag=$(ev).attr("flag");
    approve=ev.id;
    if($("#"+approve).text()!="已配置"){
        confishow()
       // $("#config").css("left",(document.body.clientWidth-$("#config").width())/2)
    }
}
function popit() {
    if(window.parent.document.getElementById("mydiv")){
        window.parent.document.getElementById("mydiv").remove();
        window.parent.document.getElementById("coverdiv").remove();
    }
    parent.document.body.appendChild(cover);
    parent.document.body.appendChild(mydiv);
    window.parent.window.approvepopit()
  // parent.mydiv.style.display = parent.cover.style.display = '';
}
function confishow(){
    if(window.parent.document.getElementById("config")){
        window.parent.document.getElementById("coverdiv").remove();
        window.parent.document.getElementById("config").remove();
    }
    parent.document.body.appendChild(cover);
    parent.document.body.appendChild(config);
    window.parent.window.configpopit();
   // parent.config.style.display = parent.cover.style.display = '';
}
