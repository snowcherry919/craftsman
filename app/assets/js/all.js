$(document).ready(() => {
    $('.checkoutCardHeader').click(function () {
        // 價格開啟與隱藏
        $(".totalPrice").toggle();
        //箭頭旋轉
        $(".rotate").toggleClass('active');
    })

});