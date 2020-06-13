$('.Uangimg').hover(function(){
    $(this).removeClass('UangMoving');
    showpayCode(true)
},function(){
    $(this).addClass('UangMoving');
    showpayCode(false)
})
var $paycode = $('.paycode'), $cardcode = $('.cardcode');
// 展示收起二维码
function showpayCode(a){
    if(a){
        $paycode.addClass('payanimove');
        $cardcode.addClass('cardanimove');
    }else{
        $paycode.removeClass('payanimove');
        $cardcode.removeClass('cardanimove');
    }
}