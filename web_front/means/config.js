
// 公共接口地址放在一起 方便管理 方便改动

var baseUrl = 'http://localhost:8000/'

var APIURLS = {

    // // 管理员登录退出获取用户信息的接口

    // jklogin : baseUrl +'admin/login' ,
    // jklogout : baseUrl +'admin/logout' ,
    // jkgetinfo : baseUrl +'admin/getuser',


    // 显示类别的接口

    category_show:  baseUrl + 'admin/category_search',
    // category_del : baseUrl + 'admin/category_delete',
    // category_add : baseUrl + 'admin/category_add',
    // category_edit : baseUrl + 'admin/category_edit',



    // 文章列表的接口
    article_show: baseUrl + 'admin/search',
    // article_del: baseUrl + 'admin/article_delete',



    // 发表评论的接口
    comment_add: baseUrl + 'post_comment',
    // 发布文章的接口
    // article_add: baseUrl + 'admin/article_publish',


    // 显示评论列表

    comment_list: baseUrl + 'get_comments'

    // // 文章编辑的接口
    // article_edit: baseUrl + 'admin/article_edit'
    
}