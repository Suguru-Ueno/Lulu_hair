'use strict'

const images = ['images/Lulu1.jpg','images/Lulu2.jpg','images/Lulu3.jpg','images/Lulu4.jpg','images/Lulu5.jpg'];
images.forEach(function(item,index){
   preloadImg(item);
});

function preloadImg(path){
   let imgTag = document.createElement('img');
   imgTag.src = path;
}

let i = 2;
function re(){
 document.getElementById('mainImg').src = images[i%5];
 i += 1;
 repeat();
}

function repeat(){
  setTimeout(re,500);
}
re();

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