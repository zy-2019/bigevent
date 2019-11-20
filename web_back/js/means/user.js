
// 提取公共的接口获取url地址

var baseUrl = 'http://localhost:8000/'

var user = {

    login : function (myname,mypassword) {

            $.post(baseUrl +'admin/login', {user_name : myname , password : mypassword} , function (res) {
            
            console.log(res);
            
            if (res.code === 200) {
                alert('登录成功')
                window.location.href = './index.html'
            }
            else if (res.code === 400) {
                // alert(res.msg)
                $('#msgInfo').text(res.msg)
                $('#myModal').modal('show')
            }
        })
    },

    logout : function () {
        
        $.post(baseUrl +'admin/logout', function (res) {
            console.log(res);

            if (res.code === 200) {
                window.location.href = './login.html'
            }   

        })
    },

    getInfo: function () {
        $.get(baseUrl +'admin/getuser', function (res) {

            console.log(res);

            if(res.code === 200){

                $(".userimg").prop('src', res.data.user_pic)

                $('#username').text(res.data.nickname)
            }

        })

    }
}

