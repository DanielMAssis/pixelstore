$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('#menu').slideToggle();
    });
    $('#menu li').click(function(){
        $('#menu').slideToggle();
    });
    $('#menu li').on('click', function(){
        let id = this.id;
        if(id == 'geral'){
            $('.card').fadeIn(700);
            $('.card').css('display','block');
        }
        else {
            $('.card').css('display','none');
            $('.'+id).fadeIn(700);
            $('.'+id).css('display','block');
        }
    });
});