function _class(name){
  return document.getElementsByClassName(name);
}
 
let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
 
for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    _class("tab-header")[0].getElementsByClassName("active-tab")[0].classList.remove("active-tab");
    tabPanes[i].classList.add("active-tab");
    
    _class("tab-indicator")[0].style.top = `calc(80px + ${i*45}px)`;
    
    _class("tab-content")[0].getElementsByClassName("active-tab")[0].classList.remove("active-tab");
    _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active-tab");
    
  });
}


var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        
        if (window.pageYOffset > 90) {
          nav.classList.add('navbar-light', 'shadow');
        } else {
          nav.classList.remove('navbar-light', 'shadow');
        }
      });