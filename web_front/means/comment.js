
var comment = {

    add : function (name,content,id,callback) {
        $.post(APIURLS.comment_add,
            {
                'name' : name,
                'content' : content,
                'article_id' : id,
        },

        function (res) {
            callback(res)
        }
        
        )
    },
    // 显示评论列表
    get : function (id,callback) {
        $.get(APIURLS.comment_list,
            {
            'article_id' : id,
        },
        function (res) {
            callback(res)
        }
        
        )

    }
}