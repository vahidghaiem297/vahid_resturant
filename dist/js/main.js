window.onload =  function(){
    AOS.init({
        'duration':1000,
        'once':true,
        'mirror':false,
        'easing':'ease-in-out',
    });

var navbar = document.getElementById("sidebar");
var close_btn =document.getElementById("close");
var btn_open = document.getElementById("opennav");
btn_open.onclick = function(){
   navbar.style.width="280px";
   document.getElementById("sidebar-nav").style.display="flex";
   document.getElementById("logo").style.display="block";
    document.getElementById("main").style.filter="opacity(.3)";
    document.getElementById("header").style.filter="opacity(.3)";
    

 

}
close_btn.onclick=function(){
    navbar.style.width="0px";
    document.getElementById("sidebar-nav").style.display="none";
    document.getElementById("logo").style.display="none";
    document.getElementById("main").style.filter="opacity(1)";
    document.getElementById("header").style.filter="opacity(1)";
}


}
$(document).ready(function(){
   $('.food-boxes').show();
   $('#all').click(function(e){
    e.preventDefault();
    $('.tabs-container li a').removeClass('active');
    $(this).addClass("active");

    $('.food-boxes').show('slow');
   });
   $('#starter').click(function(e){
    e.preventDefault();
    $('.tabs-container li a').removeClass('active');
    $(this).addClass("active");
    $('.food-boxes').hide('slow');
    $('.starter').show('slow');
   });
   $('#salad').click(function(e){
    e.preventDefault();
    $('.tabs-container li a').removeClass('active');
    $(this).addClass("active");

    $('.food-boxes').hide('slow');
    $('.salad').show('slow');
   });
   $('#expert').click(function(e){
    e.preventDefault();
    $('.tabs-container li a').removeClass('active');
    $(this).addClass("active");
    $('.food-boxes').hide('slow');
    $('.expert').show('slow');
   });
});

$(document).ready(function(){
$('.tab-content').hide();
$('#special-1').show();
$('#one').click(function(e){
    e.preventDefault();
    $('.tabs li a').removeClass('active');
    $(this).addClass("active");
});
$('#two').click(function(e){
    e.preventDefault();
    $('.tab-content').hide();
    $('#special-2').show();
    $('.tabs li a').removeClass('active');
    $(this).addClass("active");
  
})
$('#three').click(function(e){
    e.preventDefault();
    $('.tab-content').hide();
    $('#special-3').show();
    $('.tabs li a').removeClass('active');
    $(this).addClass("active");
   
})
$('#four').click(function(e){
    e.preventDefault();
    $('.tab-content').hide();
    $('#special-4').show();
    
    $('.tabs li a').removeClass('active');
    $(this).addClass("active");
    
})
$('#five').click(function(e){
    e.preventDefault();
    $('.tab-content').hide();
    $('#special-5').show();
   
    $('.tabs li a').removeClass('active');
    $(this).addClass("active");
  
})

});
