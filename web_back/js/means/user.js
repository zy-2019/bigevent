
// 提取公共的接口获取url地址 以全局变量的格式

// var baseUrl = 'http://localhost:8000/' 

// 放到一个新js文件统一引用管理

var user = {

 // 发请求拿数据
//  把数据返回去 谁用谁去处理数据
    
    login : function (myname,mypassword,callback) {

            $.post(APIURLS.jklogin , {user_name : myname , password : mypassword} , function (res) {
            
                callback(res)
            // console.log(res);
        })
    },

    logout : function (callback) {
        
        $.post(APIURLS.jklogout , function (res) {
            
            callback(res)
        })
    },

    getInfo: function (callback) {
        $.get(APIURLS.jkgetinfo, function (res) {

            callback(res)
            // console.log(res);

        })

    }
}

