
// 提取公共的接口获取url地址 以全局变量的格式

var baseUrl = 'http://localhost:8000/'

var user = {

    login : function (myname,mypassword,callback) {

            $.post(baseUrl +'admin/login', {user_name : myname , password : mypassword} , function (res) {
            
                callback(res)
            // console.log(res);
            
        })
    },

    logout : function (callback) {
        
        $.post(baseUrl +'admin/logout', function (res) {
            
            callback(res)
        })
    },

    getInfo: function (callback) {
        $.get(baseUrl +'admin/getuser', function (res) {

            callback(res)
            // console.log(res);

            

        })

    }
}

