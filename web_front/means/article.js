
var article = {

    // 发布文章的接口
    // add : function (fd,callback) {
        
    //     $.ajax({

    //         url: APIURLS.article_add,

    //         type:'post',

    //         data: fd,

    //         processData:false,//不要让jquery自动转换data

    //         contentType:false,//不要自动给content-type设置值，formdata传参会有自己的请求头

    //         success: function (res) {
    //             // console.log(res);
    //             callback(res)
    //         }
    //     })
    // },

    // 加载页面图片
    getImg : function (callback) {
        $.get(APIURLS.article_show,
            
            {
                perpage: 5 ,
                state: '已发布',
            },
            function (res) {
            callback(res)

        })
    },

    // 获取文章的详情
    getEdit : function (id, callback) {
        $.get(APIURLS.article_show,
            {
                'id' : id,
            },

            function (res) {

                callback(res)
            }
            
            )
    },


    publish : function (name,neirong,id,callback) {
        $.post(APIURLS.comment_add,
            {
                'name' : name,
                'concent' : neirong,
                'article_id' : id,
        },

        function (res) {
            callback(res)
        }
        
        )
    },
    // 显示评论列表
    listShow : function (id,callback) {
        $.get(APIURLS.comment_list,
            {
            'article_id' : id,
        },
        function (res) {
            callback(res)
        }
        
        )

    }

    // 修改信息的接口

    // edit: function(fd ,callback){
    //     $.ajax({
    //         url: APIURLS.article_edit,

    //         type: 'post',

    //         data: fd,

    //         processData: false,

    //         contentType: false, 

    //         success:function(res){
    //             callback(res)
    //         }
    //     })
    // },

    
    


}