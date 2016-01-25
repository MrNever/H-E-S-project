/**
 * Created by Mr_hu on 2016/1/21.
 */
$(function () {
    $.fn.getUrlPage = function getUrlPage(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    };
    var menuData=null;
    if ($.fn.getUrlPage('type') == 1) {
        menuData = [
            {
                "id": 1,
                "text": "接口审批",
                "iconCls": "icon-blank",
                "attributes": { "Path": "HSE_aprove.html"},
                "children": [
                    {
                        "id": 101,
                        "text": "接口审批",
                        "iconCls": "icon-blank"
                    },
                ]
            },
            {
                "id": 2,
                "text": "接口配置",
                "iconCls": "icon-blank",
                "attributes": { "Path": "Interface_configuration.html"},
                "children": [
                    {
                        "id": 102,
                        "text": "接口配置",
                        "iconCls": "icon-blank"
                    },
                ]
            },
            {
                "id": 3,
                "text": "接口查询",
                "iconCls": "icon-blank",
                "attributes": { "Path": "HES_Interfacequery.html"},
                "children": [
                    {
                        "id": 103,
                        "text": "接口查询",
                        "iconCls": "icon-blank"
                    },
                ]
            },
            {
                "id": 4,
                "parentId": null,
                "text": "系统管理",
                "iconCls": "icon-blank",
                "state": "closed",
                "attributes": { "DWH": null },
                "children": [
                    {
                        id: 4000, "parentId": 4, "text": "日志", "iconCls": "icon-blank","state": "closed", "attributes": {"Path":"Journal.html" }
                    },
                    {
                        "id": 4001, "parentId": 4, "text": "配置文件备份", "iconCls": "icon-blank","state": "closed",  "attributes": {"Path":"ConfigFileback.html" }
                    },
                    {
                        "id": 4002, "parentId": 4, "text": "用户管理", "iconCls": "icon-blank","state": "closed",  "attributes": {"Path":"User_manage.html" }
                    },
                ]
            }
        ]
    }else if($.fn.getUrlPage('type') == 2){
        menuData = [
            {
                "id": 1,
                "text": "接口申请",
                "iconCls": "icon-blank",
                "attributes": { "Path": "Interface_page.html"},
                "children": [
                    {
                        "id": 101,
                        "text": "接口申请",
                        "iconCls": "icon-blank"
                    },
                ]
            },
            {
                "id": 2,
                "text": "权限对照",
                "iconCls": "icon-blank",
                "attributes": { "Path": "Interface_Contrast.html"},
                "children": [
                    {
                        "id": 102,
                        "text": "权限对照",
                        "iconCls": "icon-blank"
                    },
                ]
            },
            {
                "id": 3,
                "text": "接口查询",
                "iconCls": "icon-blank",
                "attributes": { "Path": "HES_Interfacequery.html"},
                "children": [
                    {
                        "id": 103,
                        "text": "接口查询",
                        "iconCls": "icon-blank"
                    },
                ]
            }
        ];
    }


    $('.content_left').tree({
        onLoadSuccess: function (node, data) {
            $('div.tree li>ul').siblings().addClass('tree-node-extStyle');
            $('div.tree li>ul').each(function (i, ul) {
                if ($(ul).find('li').length <= 1) {
                    $(ul).css({'display': 'none'});
                }
            });
        },
        data: menuData,
        onClick: function (node) {
            if (node.attributes.Path != null && node.attributes.Path != "") {
                $("#left-menu").find(".tree-title").removeClass("checkedtree");
                $("#"+node.target.id).find(".tree-title").addClass("checkedtree");
                var flag = node.attributes.Path.split(".")[1];
                if (flag == "html") {
                    document.getElementById('rightcontent').src = node.attributes.Path;
                } else {
                    document.getElementById('rightcontent').src = "/" + node.text + ".html";
                }
            }
            else {
                if (node.state == 'open') {
                    $(this).tree("collapse", node.target);
                }
                else {
                    $(this).tree("expand", node.target);
                }
            }
        }
    });

    $.fn.getUrlPage = function getUrlPage(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    };
    if ($.fn.getUrlPage('username') != null) {
        username = $.fn.getUrlPage('username');
        $("#_span_usename").text(username);
    }
})