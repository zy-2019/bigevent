
var container = {

    // 显示信息的方法

    show : function (curpage,type, state,callback) {
        // 根据接口的定义，要查哪一页的数据，就传对应的值给page
        $.get(APIURLS.article_show,

             {
                page : curpage,
                type : type,
                state : state,
             },
             function (res) {
            
            callback(res)
        })
    },
    // 删除的方法
    del : function (id,callback) {

        $.get(APIURLS.article_del,{'id' : id}, function (res) {
            
            callback(res)

        })
    }



}