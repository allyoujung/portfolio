

window.onload = function() {
    var mTit = $('.tit_css');
    var illustDiv = $('.ilust_mockup');
    var closeBt = $('.div_close');
    var stateBT = $('.open_bt');

    $.each(mTit, function(index, item) {
        var btn=true;
        $(this).click(function() {
            illustDiv.eq(index).stop().toggle();
            stateBT.eq(index).toggleClass('close_bt');
            if(btn==true){
                $('#main').css('height','auto');
                btn=false;
            }else{
                $('#main').css('height','100vh');
                btn=true;
            }
            return false;
        });
    });

     $.each(closeBt, function(index, item) {
        $(this).click(function() {
            illustDiv.eq(index).hide();
            stateBT.eq(index).toggleClass('close_bt');
            $('#main').css('height','100vh');
        });
    });
};

