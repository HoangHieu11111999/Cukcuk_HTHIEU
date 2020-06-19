

$(document).ready(function () {
    dash = new dashBoard();
})

class dashBoard {
    constructor() {
        this.init();
        this.callAPI();
        this.initEvents();
    }
    initEvents() {

        $("#btnLogOut").click(function (e) {
            e.preventDefault();
            window.location.href = '/Admin/login.html';

        });
        var me = this;
        var check = true;
        $('.header-account-box').click(me.showAccountActionMenu);
        $('.header .header-left .header-left-logo .header-left-logo.logo-icon').click(function () {
            if (check) {
                $('.menu').delay(0).animate({ "left": -230 }, 500);
                $('.content').delay(0).animate({ "left": 0 }, 500);
                check = false;
            }
            else {
                $('.menu').delay(0).animate({ "left": 0 }, 500);
                $('.content').delay(0).animate({ "left": 230 }, 500);
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


    callAPI() {

        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/AllTime`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json',
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            success: function (res) {
                var rowToltal = ` <div class="statistic statistic-one-week">
                <div>
                    <i class="fas fa-users"></i>
                    <span class="title-statistic"> Tổng số Khách Hàng</span>
                </div>
                <div class="number-User">
                    ${res.Toltal}
                </div>
            </div>`
                $('#statistic-overview').append(rowToltal);
            },
            error: function (err) {
                return window.location.href = '/admin/login.html';
            }
        });
        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/OneWeek`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json',
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: '',
            success: function (res) {
                var rowToltal = ` <div class="statistic statistic-one-week">
                <div>
                    <i class="fas fa-users"></i>
                    <span class="title-statistic"> Tổng số KH 7 ngày</span>
                </div>
                <div class="number-User">
                    ${res.Toltal}
                </div>
            </div>`
                $('#statistic-overview').append(rowToltal);
            },
            error: function (err) {
            }
        });
        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/OneMonth`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json',
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: '',
            success: function (res) {
                var rowToltal = ` <div class="statistic statistic-one-month">
                <div>
                    <i class="fas fa-users"></i>
                    <span class="title-statistic"> Tổng số KH 30 ngày</span>
                </div>
                <div class="number-User">
                    ${res.Toltal}
                </div>
            </div>`
                $('#statistic-overview').append(rowToltal);
            },
            error: function (err) {
            }
        });
        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/SixMonth`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json',
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: '',
            success: function (res) {
                var rowToltal = `            <div class="statistic statistic-six-month">
                <div>
                    <i class="fas fa-users"></i>
                    <span class="title-statistic"> Tổng số KH 6 tháng</span>
                </div>
                <div class="number-User">
                    ${res.Toltal}
                </div>
            </div>`
                $('#statistic-overview').append(rowToltal);
            },
            error: function (err) {
            }
        });
        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/OneYear`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json', 
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: '',
            success: function (res) {
                var rowToltal = `<div class="statistic statistic-one-year">
                <div>
                    <i class="fas fa-users"></i>
                    <span class="title-statistic"> Tổng số KH 365 ngày</span>
                </div>
                <div class="number-User">
                    ${res.Toltal}
                </div>
            </div>`
                $('#statistic-overview').append(rowToltal);
            },
            error: function (err) {
            }
        });
        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/DataChartOneMonth`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json',
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: '',
            success: function(res) {
                var color = [];
                for (var i = 1; i <= 30; i++) {
                    function random_rgba() {
                        var o = Math.round, r = Math.random, s = 255;
                        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.5 + ')';
                    }
                    color.push(random_rgba());
                }
                console.log(color);
                var response = [];
                response = res;
                var data = [];
                var datetime = [];
                $.each(res, function (index, item) {
                    var datetemp = item.CreatedDate;
                    var result = datetemp.slice(0, 10);
                    data.push(item.Toltal
                    );
                    datetime.push(result);
                })
                console.log(datetime);
                console.log(data);
                var ctxd = document.getElementById('OneMonth').getContext('2d');
                var myChart = new Chart(ctxd, {
                    type: 'bar',
                    data: {
                        labels: datetime,
                        datasets: [{
                            label:'Khách hàng',
                            data: data,
                            backgroundColor: color,
                            borderColor: color,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            },
            error: function (err) {
            }
        });
        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/DataChartOneWeek`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json',
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: '',
            success: function (res) {
                var response = [];
                response = res;
                var data = [];
                var datetime = [];
                $.each(res, function (index, item) {
                    var datetemp = item.CreatedDate;
                    var result = datetemp.slice(0, 10);
                    data.push(item.Toltal
                    );
                    datetime.push(result);
                })
                console.log(datetime);
                console.log(data);
                var ctxj = document.getElementById('OneWeek').getContext('2d');
                var myChart = new Chart(ctxj, {
                    type: 'bar',
                    data: {
                        labels: datetime,
                        datasets: [{
                            label: 'Khách hàng',
                            data: data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255,0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(255, 159, 89, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 159, 89, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            },
            error: function (err) {
            }
        });
        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/DataChartOneYear`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json',
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: '',
            success: function(res) {
                var color = [];
                for (var i = 1; i <= 365; i++) {
                    function random_rgba() {
                        var o = Math.round, r = Math.random, s = 255;
                        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
                    }
                    color.push(random_rgba());
                }
                console.log(color);
                var response = [];
                response = res;
                var data = [];
                var datetime = [];
                $.each(res, function (index, item) {
                    var datetemp = item.CreatedDate;
                    var result = datetemp.slice(0, 10);
                    data.push(item.Toltal
                    );
                    datetime.push(result);
                })
                console.log(datetime);
                console.log(data);
                var ctxd = document.getElementById('OneYear').getContext('2d');
                var myChart = new Chart(ctxd, {
                    type: 'bar',
                    data: {
                        
                        labels: datetime,
                        datasets: [{
                            label: 'Khách hàng',
                            data: data,
                            backgroundColor: color,
                            //    [
                            //    'rgba(255, 99, 132, 0.2)',
                            //    'rgba(54, 162, 235, 0.2)',
                            //    'rgba(255, 206, 86, 0.2)',
                            //    'rgba(75, 192, 192, 0.2)',
                            //    'rgba(153, 102, 255, 0.2)',
                            //    'rgba(255, 159, 64, 0.2)',
                            //    'rgba(255, 159, 89, 0.2)'
                            //],
                            borderColor: color,
                            //    [
                            //    'rgba(255, 99, 132, 1)',
                            //    'rgba(54, 162, 235, 1)',
                            //    'rgba(255, 206, 86, 1)',
                            //    'rgba(75, 192, 192, 1)',
                            //    'rgba(153, 102, 255, 1)',
                            //    'rgba(255, 159, 64, 1)',
                            //    'rgba(255, 159, 64, 0.2)'
                            //],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            },
            error: function (err) {
            }
        });
        $.ajax({
            method: 'POST',
            url: `https://localhost:44381/Customer/DataChartSixMonth`,
            contentType: 'application/json; charset = utf-8',
            dataType: 'json',
            headers: {
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token"))
            },
            data: '',
            success: function(res) {
                var color = [];
                for (var i = 1; i <= 200; i++) {
                    function random_rgba() {
                        var o = Math.round, r = Math.random, s = 255;
                        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
                    }
                    color.push(random_rgba());
                }
                console.log(color);
                var response = [];
                response = res;
                var data = [];
                var datetime = [];
                $.each(res, function (index, item) {
                    var datetemp = item.CreatedDate;
                    var result = datetemp.slice(0, 10);
                    data.push(item.Toltal
                    );
                    datetime.push(result);
                })
                console.log(datetime);
                console.log(data);
                var ctxd = document.getElementById('SixMonth').getContext('2d');
                var myChart = new Chart(ctxd, {
                    type: 'bar',
                    data: {
                        labels: datetime,
                        datasets: [{
                            label: 'Khách hàng',
                            data: data,
                            backgroundColor: color,
                            borderColor: color,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            },
            error: function (err) {
            }
        });
    }
    init() {

       
    }

}