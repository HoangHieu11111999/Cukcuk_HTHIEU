$(document).ready(function () {
    customerJS = new CustomerJS();
    //employeeJS = new EmployeeJS();

});

class Base {
    constructor() {
        self = this;
        this.initEvents();
    }
    /**
     * load dữ liệu cho danh sách khách hàng
     * created by : HTHIEU (25/11/2019)
     * */
    renderData(data) {
        var me = this;
        let loading = $('.lds-spinner');
        $('.table-content').empty();
        console.log(data);
                if (data) {
                    var customer = data;
                    var listFieldNames = $('.master-table th');
                    $.each(customer, function (index, customers) {
                        var tr = $('<tr></tr>').data('recordID', customers.CustomerID);
                        $.each(listFieldNames, function (index, item) {
                            var format = item.getAttribute('format');
                            var data = item.getAttribute('fieldName');
                            customers[data] = customers[data] || "";
                            var td = $('<td>' + customers[data] + '</td>');
                            var birthday = customers["Birthday"] ? new Date(customers[data]).ddmmyyyy() : "";
                            var amount = customers["Amount"] ? customers["Amount"].formatMoney() : 0;
                            var is5FoodMember = customers['Is5FoodMember'] ? customers['Is5FoodMember'] : "";
                            var isGenerate = customers['IsGenerate'] ? customers['IsGenerate'] : "";
                            //
                            switch (format) {
                                case 'Date':
                                    var td = $('<td class="text-align-center">' + birthday + '</td>');
                                    break;
                                case 'Amount':
                                    var td = $('<td class="text-align-right">' + amount + '</td>');
                                    break;

                                case 'Checked-is5FoodMember':
                                    if (is5FoodMember) {
                                        var td = $('<td class="text-align-center"><input type="checkbox"  checked="checked"' + is5FoodMember + '</td>')
                                    }
                                    else {
                                        var td = $('<td class="text-align-center"><input type="checkbox"' + is5FoodMember + '</td>')
                                    }
                                    break;
                                case 'Checked-IsGenerate':
                                    if (isGenerate) {
                                        var td = $('<td class="text-align-center"><input type="checkbox" checked="checked"' + isGenerate + '</td>')
                                    }
                                    else {
                                        var td = $('<td class="text-align-center"><input type="checkbox" ' + isGenerate + '</td>')
                                    }
                                    break;
                            }
                            tr.append(td);
                        });
                        $('.table-content').append(tr);

                    });
                    //Hàm xử lý sự kiện select 
                    //Created by: HTHIEU (02/12/2019)
                    $('.master-table .table-content tr').click(function () {
                        event.stopPropagation();
                        // $('.table-content tr').css('background', '#fff');
                        $('.master-table .table-content tr').removeClass('selected');
                        $(this).addClass('selected');
                        self._Code = jQuery(this).children(":first").text();
                        self._Name = jQuery(this).find("td").eq(1).text();
                        self._ID = jQuery(this).data('recordID');
                        $('#btn-delete').attr('disabled', false);
                        $('#btn-edit').attr('disabled', false);
                    })
                    $('.table-content tr').dblclick(function () {

                        $(this).removeClass('selected');
                        $('#btn-edit').attr('disabled', true);
                        $('#btn-delete').attr('disabled', true);
                    })

                }
       
    }
    /***
    * Ham hien thi  -  ket thuc account box
    */
    initEvents() {
        var check = true;
        $('.header-account-box').click(this.showAccountActionMenu);
        $('.header .header-left .header-left-logo .header-left-logo.logo-icon').click(function () {
            if (check) {
                $('.menu').delay(0).animate({ "left": -230 },500);
                $('.content').delay(0).animate({ "left": 0 },500);
                check = false;
            }
            else {
                $('.menu').delay(0).animate({ "left": 0 },500);
                $('.content').delay(0).animate({ "left": 230 },500);
                check = true;
            }
        });
       
        $(window).click(this.hideAccountActionMenu);
        
        $(window).click(function () {
            $('.table-content tr').removeClass('selected');
            $('#btn-edit').attr('disabled', true);
            $('#btn-delete').attr('disabled', true);
            
        })

    }
    showAccountActionMenu() {
        
        $('body').find('.account-action-box').show();

        event.stopPropagation();
    }
    hideAccountActionMenu() {
        $('body').find('.account-action-box').hide();
    }
}