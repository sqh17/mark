// 底部tabs选择
$('.fixed-bot').on('click', 'li', function () {
    $(this).find('p').addClass('fixed-bot-select');
    $(this).siblings('li').find('p').removeClass('fixed-bot-select');
    $(this).find('img:nth-child(1)').addClass('fixed-icon-display');
    $(this).siblings('li').find('img:nth-child(1)').removeClass('fixed-icon-display');
    $(this).find('img:nth-child(2)').removeClass('fixed-icon-display');
    $(this).siblings('li').find('img:nth-child(2)').addClass('fixed-icon-display');
    // console.log(window.location.href.substring())
    if($(this).index() === 0){
        window.location.href='../html/index.html'
    }else if($(this).index() === 1){
        window.location.href='../html/allCourse.html'
    }else if($(this).index() === 2){
        window.location.href='../html/myCourse.html'
    }else{
        window.location.href='../html/mine.html'
    }
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



// 搜索框
$('.search').on('input', 'input', function () {
    if ($(this).val() == '') {
        $('.search_icon').show()
    } else {
        $('.search_icon').hide()
    }
})
$('.search').on('blur', 'input', function () {
    if ($(this).val() == '') {
        $('.search_icon').show()
    } else {
        $('.search_icon').hide()
    }
})
$('.search').on('focus', 'input', function () {
    if ($(this).val() == '') {
        $('.search_icon').show()
    } else {
        $('.search_icon').hide()
    }
})