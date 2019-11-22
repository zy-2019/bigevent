
// 公共接口地址放在一起 方便管理 方便改动

var baseUrl = 'http://localhost:8000/'

var APIURLS = {

    jklogin : baseUrl +'admin/login' ,
    jklogout : baseUrl +'admin/logout' ,
    jkgetinfo : baseUrl +'admin/getuser',



    category_show:  baseUrl + 'admin/category_search',
    category_del : baseUrl + 'admin/category_delete',
    category_add : baseUrl + 'admin/category_add',
    category_edit : baseUrl + 'admin/category_edit',


    article_show: baseUrl + 'admin/search',
    article_del: baseUrl + 'admin/article_delete',





}