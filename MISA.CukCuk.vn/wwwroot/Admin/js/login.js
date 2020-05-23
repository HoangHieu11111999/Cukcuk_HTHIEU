var login = function () {

    this.init = function () {

        registerEvents();
    }


    var registerEvents = function () {

        $('body').on('click', '#btnLogin', function (e) {
            e.preventDefault();
            var username = $('#txtUsername').val();
            var password = $('#txtPassword').val();
            var obj = new Object();
            obj.UserName = $('#txtUsername').val();
            obj.PassWord = $('#txtPassword').val();
            //var data = $('#login-Form').serialize();
            //console.log(data);
            /**
    * Hàm thực hiện build nên 1 đối tượng khách hàng từ form chi tiết
    * Created by HTHIEU(09/12/2019)
    * */

            validLogin(username, password, obj);

        });

    }

    function validLogin(username, password, obj) {
        try {
            $.ajax({
                type: 'POST',
                url: `https://localhost:44381/admin/loginAdmin`,
                data: JSON.stringify(obj),
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    if (username === '' || username === 'User name' || username.length <= 4) {
                        return setTimeout(function () { $('#txtValid').text('You must enter User name!'); }, 3000);

                    }

                    else if (password == '' || password == 'Password' || password.length <= 4) {

                        return setTimeout(function () { $('#txtValid').text('You must enter Password!'); }, 3000);
                    }
                    if (response === 1) {
                        alert('success');
                        return window.location.href = '/Views/Dictionary/customer.html';
                    }
                    else {
                        alert('User account or password is incorrect!');
                    }
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