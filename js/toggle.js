// 获取视频按钮
var title_list_two1=document.getElementById('title_list_two1');
var title_list_two2=document.getElementById('title_list_two2');
var title_list_one=document.getElementById('title_list_one');
var live2=document.querySelector('.live2');
var live1=document.querySelector('.live1');
var live3=document.querySelector('.live3');
var live4=document.querySelector('.live4');
var Hot=document.getElementById('Hot');
var hot=document.querySelector('.hot');
   //点击视频让视频显示其他隐藏
   title_list_two1.onclick=function(){
       live1.style.display='none';
       live3.style.display='none';
       live2.style.display='block';
   }
   //点击才艺让才艺显示其他隐藏
   title_list_two2.onclick=function(){
    live1.style.display='none';
    live3.style.display='block';
    live2.style.display='none';
   }
   //点击全部让全部都显示
   title_list_one.onclick=function(){
    live1.style.display='block';
    live3.style.display='block';
    live2.style.display='block';
    live4.style.display='block';
   }

   //点击最新显示最新
   Hot.onclick=function(){
       hot.className='hot';
       this.className='avtive hot';
       live4.style.display='block';
       live1.style.display='none';
       live3.style.display='none';
       live2.style.display='none';
   }
   //点击热门显示热门
   hot.onclick=function(){
    Hot.className='hot';
    this.className='avtive hot';
    live1.style.display='block';
    live3.style.display='block';
    live2.style.display='block';
    live4.style.display='none';
   }




// 获取翻页按钮
 var page1=document.getElementById('page1');
 var page2=document.getElementById('page2');
 var page3=document.getElementById('page3');
//  分别注册点击事件
page1.onclick=function(){
    this.className='avtive1'
    page3.className='';
    page2.className='';
    live2.style.display='block';
    live4.style.display='none';
    live1.style.display='none';
    live3.style.display='none';
}
page2.onclick=function(){
    page1.className='';
    page3.className='';
    this.className='avtive1'
    live2.style.display='none';
    live4.style.display='none';
    live1.style.display='none';
    live3.style.display='block';
}
page3.onclick=function(){
    this.className='avtive1'
    page1.className='';
    page2.className='';
    live2.style.display='none';
    live4.style.display='block';
    live1.style.display='none';
    live3.style.display='none';
}