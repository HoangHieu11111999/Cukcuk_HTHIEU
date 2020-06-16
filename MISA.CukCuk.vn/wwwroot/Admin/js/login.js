var login = function () {

    this.init = function () {

        registerEvents();
    }


    var registerEvents = function () {

        $('body').on('click', '#btnLogin', function (e) {
            e.preventDefault();
            var username = $('#txtUsername').val();
            var password = $('#txtPassword').val();
            /**
    * Hàm thực hiện build nên 1 đối tượng khách hàng từ form chi tiết
    * Created by HTHIEU(09/12/2019)
    * */
            var obj = {
                UserName: username,
                PassWord: password
            };
            obj.UserName = $('#txtUsername').val();
            obj.PassWord = $('#txtPassword').val();
            //var data = $('#login-Form').serialize();
            //console.log(data);


            validLogin(username, password, obj);

        });

    }

    function validLogin(username, password, obj) {
        try {
            $.ajax({
                type: 'GET',
                url: `https://localhost:44381/admin/loginAdmin?UserName= + ${username}&PassWord= + ${password}`,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log(token);
                    if (username === '' || username === 'User name' || username.length <= 4) {
                        return $('#txtValid').text('You must enter User name!');
                    }
                    else if (password == '' || password == 'Password' || password.length <= 4) {
                        return $('#txtValid').text('You must enter Password!');
                    }
                    localStorage.setItem('token', JSON.stringify(data.token));
                         return window.location.href = '/Views/Dictionary/dashboard.html';
                },
                error: function (err) {
                    alert(err);
                }
            });
        } catch
        {
            alert(err);
        }
    }
}