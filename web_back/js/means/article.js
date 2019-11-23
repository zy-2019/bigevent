
var article = {

    add : function (fd,callback) {
        
        $.ajax({

            url: APIURLS.article_add,

            type:'post',

            data: fd,

            processData:false,//不要让jquery自动转换data

            contentType:false,//不要自动给content-type设置值，formdata传参会有自己的请求头

            success: function (res) {
                // console.log(res);
                callback(res)
            }
        })
    }

}