$('#slick').slick({
    arrows:false,
    slidesToShow: 1,
    dots:true
})
$('.header_container__navbar__list li a ').click(function(){
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('html,body').animate({scrollTop:top},1000)
})

document.getElementById('send_button').addEventListener('click',function(){
    console.log(document.getElementById('name').value)
    console.log(document.getElementById('number').value)
    document.getElementById('name').value=''
    document.getElementById('number').value=''
})