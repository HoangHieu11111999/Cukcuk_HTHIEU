/* Định dạng ngày tháng năm 
 *CreatedBy: HTHIEU (21/11/2019)
 **/
if (!Date.prototype.ddmmyyyy) {
    Date.prototype.ddmmyyyy = function () {
        var mm = this.getMonth() + 1; 
        var dd = this.getDate();
        var yyyy = this.getFullYear();
        return [(dd > 9 ? '' : '0') + dd + '/',
        (mm > 9 ? '' : '0') + mm + '/',
        yyyy
        ].join('');
    };
}
/* Định dạng hiển thị tiền tệ 
 *CreatedBy: HTHIEU (21/11/2019)
 **/
if (!Number.prototype.formatMoney) {
    Number.prototype.formatMoney = function (char) {
        var moneyFormat = this.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        if (char) {
            moneyFormat = moneyFormat.replaceAll(",", char);
        }
        return moneyFormat;
    };
}