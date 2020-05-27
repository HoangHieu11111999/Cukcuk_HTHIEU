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
            var obj = new Object();
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
                type: 'POST',
                url: `https://localhost:44381/admin/loginAdmin`,
                data: JSON.stringify(obj),
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    var userLogin = ` <div class="header-account-box">
                    <div class="account-avatar"></div>
                    <div class="account-name"><span>${response}</span></div>
                    <div class="account-action-box hide-outside-click">
                        <div class="account-action-item"><span class="icon icon-edit"></span>Thay đổi mật khẩu</div>
                        <div class="account-action-item" id="btnLogOut"><span class="icon icon-logout"></span>Ðăng xuất</div>
                    </div>
                    </div>`;
                    $(".header-account-box").append(userLogin);
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