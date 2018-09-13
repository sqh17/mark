// 底部tabs选择
$('#fixed_bot').on('click', 'li', function () {
    $(this).find('p').addClass('fixed-bot-select');
    $(this).siblings('li').find('p').removeClass('fixed-bot-select');
    $(this).find('img:nth-child(1)').addClass('fixed-icon-display');
    $(this).siblings('li').find('img:nth-child(1)').removeClass('fixed-icon-display');
    $(this).find('img:nth-child(2)').removeClass('fixed-icon-display');
    $(this).siblings('li').find('img:nth-child(2)').addClass('fixed-icon-display');
})

// 倒计时
function timer(intDiff) {
    window.setInterval(function () {
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0;//时间默认值        
        if (intDiff > 0) {
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $('#start_timing').html(`即将开始 ${hour}:${minute}:${second} `)
        intDiff--;
    }, 1000);
}