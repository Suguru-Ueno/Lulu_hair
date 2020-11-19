$(function(){
  $('.toggle_btn').on('click',function(){
    $('#page-header').toggleClass('open')
  });
});

$(function(){
  $('#mask').on('click',function(){
    $('#page-header').removeClass('open')
  });
});