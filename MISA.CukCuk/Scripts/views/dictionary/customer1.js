/// /*<reference path="customer.js" />*/
///* Thực hiện khởi tạo đối tượng js của trang customer1.html */
//$(document).ready(function () {
//    customerJS = new CustomerJS();
//});

///**
// * Class quản lý js của trang customer1.html
// * CreatedBy: HTHIEU (21/11/2019)
// * */
//class CustomerJS {
//    constructor() {
//        this.loadData();
//    }

//    /**
//    * Khởi tạo các thành phần của form:
//    * CreatedBy: NVMANH (11/08/2019)
//    * */
//    initForm() {
//        this.FrmDetail = $('.frmDetail').dialog({
//            autoOpen: true,
//            width: 680,
//            modal: true
//        });
//    }
//    /**
//     * Gán các sự kiện cho button, form
//     * CreatedBy: NVMANH (11/08/2019)
//     * */
//    initEvent() {
//        $("#btnAdd").click(this.btnAddOnClick.bind(this));
//        $("#btnCancelDialog").click(function () {
//            this.FrmDetail.dialog('close');
//        }.bind(this));
//    }

//    /**
//     * Load dữ liệu danh sách khách hàng
//     * CreatedBy: NVMANH (11/08/2019)
//     * */
//    loadData() {
//        $.getJSON("/Contents/data/data.json", function (data) {
//            if (data) {
//                var customers = data.Customers;
//                $.each(customers, function (index, customer) {
//                    var rowHTML = $('<tr class="grid-row"></tr>');

//                    if (index % 2 > 0) {
//                        rowHTML.addClass('grid-row-alt');
//                    }

//                    var birthday = customer['Birthday'] ? customer['Birthday'] : "";
//                    var is5FoodMember = customer['Is5FoodMember'] ? customer['Is5FoodMember'] : "";
//                    var isGenerate = customer['IsGenerate'] ? customer['IsGenerate'] : "";
//                    if (birthday) {
//                        birthday = new Date(birthday).ddmmyyyy();
//                    }
//                    rowHTML.append('<td class="grid-cell-inner">' + (customer['CustomerCode'] || "") + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner">' + (customer['CustomerName'] || "") + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner text-align-center">' + birthday + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner">' + (customer['CompanyName'] || "") + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner">' + (customer['CompanyTaxCode'] || "") + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner">' + (customer['Address'] || "") + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner">' + (customer['Tel'] || "") + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner">' + (customer['Email'] || "") + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner text-align-right">' + (customer['Amount'].formatMoney('.')) + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner">' + (customer['Description'] || "") + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner text-align-center">' + (is5FoodMember ? '<input type="checkbox" checked disabled/>' : '<input type="checkbox" disabled/>') + '</td>');
//                    rowHTML.append('<td class="grid-cell-inner text-align-center">' + (isGenerate ? '<input type="checkbox" checked disabled/>' : '<input type="checkbox" disabled/>') + '</td>');
//                    $('#tbCustomerList tbody').append(rowHTML);
//                });
//                commonJS.setFirstRowSelected($('#tbCustomerList'));
//            }
//        });
//    }

//    /**
//     * Hiển thị Form chi tiết thêm mới khách hàng
//     * CreatedBy: NVMANH (11/08/2019)
//     * */
//    btnAddOnClick() {
//        this.FrmDetail.dialog('open');
//    }

//}
//$(function () {
//    $("#dtBirthday").datepicker({
//        showOn: "button",
//        buttonImage: "/Contents/images/form/date-trigger.png",
//        buttonImageOnly: true,
//        dateFormat: 'dd/mm/yy'
//    });
//});
$(document).ready(function () {
    customerJS = new CustomerJS();
});


class CustomerJS {
    constructor() {
        this.loadData();
    }
       /**
        * Hàm load dữ liệu từ trang customer1.html
        * CreatedBy: HTHIEU (21//11/2019)
        * */
    loadData() {
        try {
            $.getJSON("/Contents/data/data.json", function (data) {
                if (data && data["Customers"]) {
                    var customers = data["Customers"];
                    $.each(customers, function (index, customers) {
                        var birthday = customers["Birthday"] ? new Date(customers["Birthday"]).ddmmyyyy() : "";
                        var companyName = customers["CompanyName"] || "";
                        var companyTaxCode = customers["CompanyTaxCode"] || "";
                        var address = customers["Address"] || "";
                        var tel = customers["Tel"] || "";
                        var amount = customers["Amount"] ? customers["Amount"].formatMoney() : 0;
                        var description = customers["Description"] || "";
                        var is5FoodMember = customers['Is5FoodMember'] ? customers['Is5FoodMember'] : "";
                        var isGenerate = customers['IsGenerate'] ? customers['IsGenerate'] : "";
                        var email = customers["Email"] || "";  
                        var tr = `<tr class="table-header">
                                    <td>${customers.CustomerCode}</td>
                                    <td>${customers.CustomerName}</td>
                                    <td class="text-align-center" >${birthday}</td>
                                    <td>${companyName}</td>
                                    <td>${companyTaxCode}</td>
                                    <td>${address}</td>
                                    <td>${tel}</td>
                                    <td>${email}</td>
                                    <td class="text-align-right" >${amount}</td>
                                    <td>${description}</td>                               
                                    <td class="text-align-center">${Is5FoodMember(is5FoodMember)}</td>
                                    <td class="text-align-center">${IsGenerate(isGenerate)}</td>
                                </tr>`;
                        $('.table-content').append(tr);
                    });
                }
            });
            }catch (e) {
                console.log(e);
        }
        function Is5FoodMember (value) {
            if (value ) {
                return "<input type=\"checkbox\" checked\/>";
            }
            else {
                return "<input type=\"checkbox\"/>";
            }
        }
        function IsGenerate (value) {
            if (value ) {
                return "<input type=\"checkbox\" checked\/>";
            }
            else {
                return "<input type=\"checkbox\"/>";
            }
        }
       
        ////function dateFomart() {
        ////    var dateFomart;
        ////    var dateString = date.getDate(),
        ////        monthString = date.getMonth() + 1,
        ////        yearString = date.getFullYear(); 

        ////    return dateFomart = dateString + '/' monthString + '/' yearString ;
        ////}
    }    

    add() {

    }

    edit() {

    }

    delete() {

    }

}

