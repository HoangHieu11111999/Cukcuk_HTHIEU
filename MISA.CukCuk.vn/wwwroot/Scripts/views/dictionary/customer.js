

class CustomerJS extends Base {

    /***
    * Khởi tạo constructor cho class CustomerJS
    * created by HTHIEU (18/12/2019)
    */
    constructor() {
        super();
        this.init();
        this.load();
        this.initForm();
        this.initEvent();
        this.loadProfileAccount();
        self = this;
    }

    init() {
        this.tableID = "#tableMaster";
        this.getDataUrl = "/Contents/data/data.json";
        this.fieldName = "Customers";
    }

    initEvent() {
        $('#btn-add').click(this.add.bind(this));
        $('#btn-add').click(function (event) {
            event.preventDefault();
        });
        $('#btn-delete').click(this.openDialogDelete.bind(this));
        $('#btn-delete').click(function (event) {
            event.preventDefault();
        });
        $('#btn-edit').click(this.edit.bind(this));
        $('#btn-edit').click(function (event) {
            event.preventDefault();
        })
        $('input[fieldrequired="required"]').blur(this.validDateForm);
        $('input[fieldrequired="required"]').blur(this.requiredValiDate);

        $('#btn-cancel-dialog').click(this.clearFormDialog.bind(this));
        $('#save-dialog').click(this.save.bind(this));
        $('#edit-dialog').click(this.save.bind(this));
        $("#btn-loadDataTable").click(this.btnLoadDataTable.bind(this));
        $("#btn-cf-delete").click(this.delete.bind(this));
        $('#btn-cf-cancel-delete').click(this.cancel1.bind(this));
        $('.style-input.name').keyup(this.Search.bind(this));
        $('#btnLogOut').click(function (e) {
            e.preventDefault();
            window.location.href = '/Admin/login.html';
            return;
        });
    }

    //Hàm render dữ liệu account đăng nhập 
    //HTHIEU (20/06/2020)
    loadProfileAccount() {
        let elementAccount = `<div class="account-avatar"></div>
                    <div class="account-name"><span>${localStorage.getItem('userName')}</span></div>
                    <div class="account-action-box hide-outside-click">
                        <div class="account-action-item"><span class="icon icon-edit"></span>Thay đổi mật khẩu</div>
                        <div class="account-action-item" id="btnLogOut"><span class="icon icon-logout"></span><a href="../../Admin/login.html" style="text-decoration:none">Ðăng xuất</a></div>
                    </div>`
        $('#header-account-box').append(elementAccount);
    }

    //loadPagniCustomer
    //HTHIEU(Createdby)
    load() {
        var me = this;
        this.loadDataPagani();
        let count = 1;
        
        $("#icon-come-back").click(function () {
            var pageMiddle = $("#page").val();
            var pageTotal = $("#pageTotal").val();
            var pages = $("#page").val();
            console.log(pageMiddle);

            var page = --pageMiddle;
            console.log(page);
            $("#page").val(page);
            console.log(page);
            $.ajax({
                method: "GET",
                url: "/Customer",
                dataContent: "application/Json",
                dataType: "Json",
                headers: {
                    'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
                },
                data: {
                    "PageNumber": page,
                    "PageSize": pageTotal,
                },
                

            }).done(function (data) {
                if (data.length == 0) {
                    alert('Trang không có dữ liệu');
                }
                $('tbody').empty();
                me.renderData(data);
                console.log(data.length)
                var disTotalCustomer =
                    `<div class="text-toolbar-paging-right">Hiển thị kết quả ${data.length} bản ghi</div>`
                $('.toolbar-paging-right').html(disTotalCustomer);
            });
        });
        $("#icon-come-back-many-times").click(function () {
            var pageMiddle = $("#page").val();
            var pageTotal = $("#pageTotal").val();
            var pages = $("#page").val();
            console.log(pageMiddle);

            var page = parseInt(pageMiddle) - 2  ;
            console.log(page);
            $("#page").val(page);
            console.log(page);
            $.ajax({
                method: "GET",
                url: "/Customer",
                dataContent: "application/Json",
                dataType: "Json",
                headers: {
                    'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
                },
                data: {
                    "PageNumber": page,
                    "PageSize": pageTotal,
                },

            }).done(function (data) {
                if (data.length == 0) {
                    alert('Trang không có dữ liệu');
                }
                $('tbody').empty();
                me.renderData(data);
                console.log(data.length)
                var disTotalCustomer =
                    `<div class="text-toolbar-paging-right">Hiển thị kết quả ${data.length} bản ghi</div>`
                $('.toolbar-paging-right').html(disTotalCustomer);
            });
        });
        $("#icon-many-next").click(function () {
            var pageMiddle = $("#page").val();
            var pageTotal = $("#pageTotal").val();
            var pages = $("#page").val();
            console.log(pageMiddle);

            var page = parseInt(pageMiddle) + 2;
            console.log(page);
            $("#page").val(page);
            console.log(page);
            $.ajax({
                method: "GET",
                url: "/Customer",
                dataContent: "application/Json",
                dataType: "Json",
                headers: {
                    'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
                },
                data: {
                    "PageNumber": page,
                    "PageSize": pageTotal,
                },

            }).done(function (data) {
                if (data.length == 0) {
                    alert('Trang không có dữ liệu');
                }
                $('tbody').empty();
                me.renderData(data);
                console.log(data.length)
                var disTotalCustomer =
                    `<div class="text-toolbar-paging-right">Hiển thị kết quả ${data.length} bản ghi</div>`
                $('.toolbar-paging-right').html(disTotalCustomer);
            });
        });
        $("#icon-next").click(function () {
            var pageMiddle = $("#page").val();
            var pageTotal = $("#pageTotal").val();
            var pages = $("#page").val();
            console.log(typeof(pageMiddle));

            var page = ++pageMiddle;
            console.log(page);
            $("#page").val(page);
            console.log(page);
            $.ajax({
                method: "GET",
                url: "/Customer",
                dataContent: "application/Json",
                dataType: "Json",
                headers: {
                    'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
                },
                data: {
                    "PageNumber": page,
                    "PageSize": pageTotal,
                },

            }).done(function (data) {
                if (data.length == 0) {
                    alert('Trang không có dữ liệu');
                }
                $('tbody').empty();
                me.renderData(data);
                console.log(data.length)
                var disTotalCustomer =
                    `<div class="text-toolbar-paging-right">Hiển thị kết quả ${data.length} bản ghi</div>`
                $('.toolbar-paging-right').html(disTotalCustomer);
            });
        });
        $("#icon-reload").click(function () {
            me.loadDataPagani();
        })
        $("#pageTotal").click( function () {
            me.loadDataPagani();


        })
        
    }

    loadDataPagani() {
        var me = this;
        var pageTotal = $("#pageTotal").val();
        var page = $("#page").val();
        console.log(sessionStorage.getItem("token"));
        let token = JSON.parse(sessionStorage.getItem("token"));
        $.ajax({
            method: "GET",
            url: "/Customer",
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            dataContent: "application/Json",
            dataType: "Json",
            data: {
                "PageNumber": page,
                "PageSize": pageTotal,
            },
            error: function (err) {
                return window.location.href = '/admin/login.html';
            }

        }).done(function (data) {
            if (data.length == 0) {
                alert('Trang không có dữ liệu');
            }
            $('tbody').empty();
            me.renderData(data);
            var disTotalCustomer =
                `<div class="text-toolbar-paging-right">Hiển thị kết quả ${data.length} bản ghi</div>`
            $('.toolbar-paging-right').html(disTotalCustomer);

        });

    }
    /**
    * tạo form dialog thêm thông tin khách hàng
    * createdby  :HTHIEU (16/12/2019)
    */
    initForm() {
        this.FormCustomerDetail = $('.dialog-demo').dialog({
            modal: true,
            minWidth: 680,
            minHeight: 335,
            autoOpen: false,
            fluid: true,
            title: "Khách hàng",
            open: function () {
            },
            close: function () {

            },
        });
    }
    /**
    * bắt sự kiện thêm và sửa dữ liệu khách hàng từ form dialog
    * createdby  :HTHIEU (16/12/2019)
    */
    save() {
        var mode = this.FormCustomerDetail.Mode;
        switch (mode) {
            case 'add':
                var me = this;
                var object = me.buildObject();
                $.ajax({
                    method: 'POST',
                    url: '/Customer',
                    headers: {
                        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
                    },
                    data: JSON.stringify(object),
                    contentType: 'application/json; charset = utf-8',
                    success: function (res) {
                        $('tbody').empty();
                        me.clearFormDialog();
                        alert(`"Đã thêm thành công Mã KH :"` + $("#txtID")); 
                        //me.FormCustomerDetail.dialog('close');
                        me.load();
                    },
                    error: function (res) {
                        alert(res);
                    }
                });
                break;
            case 'edit':
                var me = this;
                var object = me.buildObject();
                object['CustomerID'] = self._ID;
                $.ajax({
                    method: 'PUT',
                    url: '/Customer',
                    headers: {
                        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
                    },
                    data: JSON.stringify(object),
                    contentType: 'application/json; charset = utf-8',
                    success: function (res) {
                        $('tbody').empty();
                        me.clearFormDialog();
                        alert(`Đã sửa thành công MÃ KH : ${self._Code}`);
                        //me.FormCustomerDetail.dialog('close');
                        me.load();
                    },
                    error: function (res) {

                    }
                });
                break;
            default:
        }
    }
    /**
    * hàm mở form dialog thêm và check dữ liệu thông tin trên form dialog thêm 
    * createdby  :HTHIEU (16/12/2019)
    */
    add() {
        this.FormCustomerDetail.Mode = 'add';
        this.FormCustomerDetail.dialog('open');
        this.FormCustomerDetail.dialog('option', 'title', 'Thêm mới khách hàng');
        this.validDateForm();
    }
    
    /***
     * Hàm thực hiện xóa thông tin khách hàng được chọn 
     * CreatedBy : HTHIEU(10/12/2019)
     * */
    delete() {
        var me = this;
        $.ajax({
            method: 'DELETE',
            url: '/Customer/' + self._ID,
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            contentType: 'application/json; charset = utf-8',
            success: function (res) {
                    me.openDialogDeletes.dialog('close');
                $('tbody').empty();
                alert(`Đã xáo thành công Tên KH : ${self._Name} có Mã KH : ${self._Code}`)
                me.load();
            },
            error: function (res) {
              
            }
        });

    }
    /**
 * Hàm thực hiện lấy id của bản ghi được chọn
 * Created by  HTHIEU(09/12/2019)
 * */

    getRowID() {
        if ($('tbody tr.selected')) {
            var selected = $('tbody tr.selected');
            console.log(selected);
            return selected;
        }
    }
    /**
     * Hàm thực hiện lấy khách hàng theo id khách hàng
     * Created by HTHIEU(09/12/2019)
     * */

    getCustomerByID() {
        var me = this;
        var id = me.getRowID();
        var data = {};
        $.ajax({
            method: 'GET',
            url: '/customer' + id,
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            success: function (res) {
                if (res.Success) {
                    data = res.Data;
                }
            },
            error: function (res) {

            }
        });
        return data;
    }
    /***
    * Hàm thực hiện check thông tin input của dialog
    * created by : HTHIEU(16/12/2019)
    *
    */
    validDateForm() {
        var fields = $('.content-dialog-top input,textarea[findName]');
        $.each(fields, function (i, item) {
            var findName = item.getAttribute("findName");
            switch (findName) {
                case "Tel":
                    $('#tel').on({
                        blur: function () {
                            var value = this.value;
                            value = value.replace(".", "");
                            if (!value || $.isNumeric(value) == false || value.length < 10 || value.length > 11) {
                                $(this).addClass("border-red").attr("title", "Hãy nhập số điện thoại đúng định dạng");;
                            }
                        },
                        focus: function () {
                            $(this).removeClass("border-red").removeAttr("title");
                        }
                    })
                    break;
                case "Birthday":
                    $('#birthday').on({
                        blur: function () {
                            
                            var value = this.value;
                            if (value == false) {
                                $(this).addClass("border-red").attr("title", "dd/mm/yyyy");;
                            }
                        },
                        focus: function () {
                            $(this).datepicker({
                                dateFormat: 'dd/mm/yy',
                            });
                            $(this).removeClass("border-red").removeAttr("title");
                        }
                    })
                    $("#birthday").on("change", function () {
                        $(this).removeClass("border-red").removeAttr("title");
                    })
                    break;
                case "Email":
                    $('#email').on({
                        blur: function () {
                            var value = this.value;
                            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            var bool = re.test(value);
                            if (!bool) {
                                $(this).addClass("border-red").attr("title", "Bạn chưa nhập đúng định dạng email");;
                            }
                        },
                        focus: function () {
                            $(this).removeClass("border-red").removeAttr("title");
                        }
                    })
                    break;
                default:
                    break;
            }
        })
    }
    /**
     * hàm mở form dialog edit data
     * created by: HTHIEU(02/12/2019)
     * */
    edit() {
        try {
            this.FormCustomerDetail.Mode = 'edit';
            this.FormCustomerDetail.dialog('open');
            this.FormCustomerDetail.dialog('option', 'title', 'Sửa khách hàng');
            this.checkedDataDialog();
            this.validDateForm();
        } catch (e) {
            console.log(e);
        }
    };
    /***
    * hàm lấy giá trị từ ô select (row data)
    * createdby : HTHIEU (19/12/2019)
    */
    valSelect() {
        var limit = $(".icon-toolbar-paging.select-option select").val();
        console.log(limit);
    }



    /**
     * hàm xử lí click hủy bỏ dialog
     * created by : HTHIEU(02/12/2019)
     * */
    cancel() {
        this.FormCustomerDetail.dialog('close');
        
    }
    /**
    * hàm xử lý validate dữ hiệu 
    */
    requiredValiDate() {
    
        var value = this.value;
        console.log(value);
        if (!value) {
            $(this).addClass('border-red');/*.css("background", " url('/Contents/images/exclamation.png') no-repeat 100%;");*/
            $(this).attr('title', 'không được để khoảng trống');
        }
        else {
            $('border-red').focus();
            $(this).removeClass('border-red');

            $(this).removeAttr('title', 'không được để khoảng trống');
        }
    }

    /**
     * hàm load lại dữ liệu cho bảng dialog
     * created by HTHIEU(02/12/2019)
     * */
    clearFormDialog() {
        this.FormCustomerDetail.dialog('close');
        var fields = $('.content-dialog-top input,textarea[findName]');

        $.each(fields, function (index, field) {
            field.value = '';
        })
    }
    /**
     * hàm xử lý btn-Nạp lại trang
     * created by : HTHIEU(02/12/2019)
     * */
    btnLoadDataTable() {
        $('tbody').empty();
        this.renderData();
    }
    /**
     * hàm tạo form dialog xóa
     * created by : HTHIEU(02/12/2019)
     * */
    openDialogDelete() {
         
        this.openDialogDeletes = $('#dialog-delete').dialog({
            modal: true,
            width: 400,
            height: 125,
            closeText: 'Đóng',
            open: function () {

            },
            close: function () {
            },
        });
        
        var data = self._Code;
        var code = self._Name;
        $('#information-delete').text(" " + data + " - " + code + " " );
    }

    Search() {
        var me = this;
        var data = $('.style-input.name').val();
        console.log(data);
        $.ajax({
            method: "POST",
            url: "/Customer/SearchCustomerName/" + data,
            dataContent: "application/Json",
            dataType: "Json",
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: {},
        }).done(function (data) {
            me.renderData(data);
        })
    }

    /**
     * Hàm thực hiện build nên 1 đối tượng khách hàng từ form chi tiết
     * Created by HTHIEU(09/12/2019)
     * */

    buildObject() {
        var property = $('.dialog-demo [findName]');
        console.log(property);
        var object = {};
        $.each(property, function (index, item) {
            var propertyName = item.getAttribute('findName');
            var propertyValue = $(item).val();
            if (propertyName === "Birthday") {
                //propertyValue = changeToDateTime(propertyValue);
                let arr = propertyValue.split('/');
                propertyValue = arr[2] + '-' + arr[1] + '-' + arr[0];
            }
            if (propertyName === "GroupCustomerID") {
                propertyValue = $(item).val();
            }

            object[propertyName] = propertyValue;
        });
        return object;
    }
    
    cancel1() {
        this.openDialogDeletes.dialog('close');
    }


    /**
     * hàm lấy dữ liệu khách hàng tương ứng truyền lên form dialog
     * created by : HTHIEU(02/12/2019)
     * */
    checkedDataDialog() {
        // lấy các input thông tin trong forrm chi tiết:
        var fields = $('.content-dialog-top input,textarea[findName]');
        // lấy dữ liệu khách hàng tường ứng 
        try {
            var pageTotal = $("#pageTotal").val();
            var page = $("#page").val();
            $.ajax({
                method: "GET",
                url: "/Customer",
                dataContent: "application/Json",
                dataType: "Json",
                headers: {
                    'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
                },
                data: {
                    "PageNumber": page,
                    "PageSize": pageTotal
                },
            }).done(function (data) {
                if (data) {
                    $.each(data, function (index, customer) {
                        if (customer.CustomerCode === self._Code) {
                            console.log(customer)
                            $.each(fields, function (index, field) {
                                var filedName = field.getAttribute('findName');
                                var format = field.getAttribute('format');
                                var value = customer[filedName];
                                value = value || "";
                                switch (format) {
                                    case 'Date':
                                        value = value ? new Date(value).ddmmyyyy() : "";
                                        $(field).val(value);
                                        break;
                                     $('#txtID').attr('disabled', false);
                                    default:
                                        break;
                                }
                                $(field).val(value);
                            })
                        }
                    });
                }
            })
        } catch (e) {
            console.log(e);
        }

    }
}

