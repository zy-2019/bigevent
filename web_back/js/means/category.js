
// 类别的方法
var category = {

    show : function (callback) {
        
        $.get(APIURLS.category_show , function (res) {
            callback(res)
        })
    },

    // post 是有参数的
    del : function (id,callback) {
        $.post(APIURLS.category_del,{'id' : id},function (res) {
            callback(res)
        })
    },

    add : function (name, slug,callback) {
        $.post(APIURLS.category_add, {'name':name , 'slug' : slug},function (res) {

            // 把数据返回去自己处理
            callback(res)
        })
    },

    edit : function (id,name,slug,callback) {
        $.post(APIURLS.category_edit,{'id' : id, 'name':name , 'slug' : slug }, function (res) {
            callback(res)
        })
    }





}