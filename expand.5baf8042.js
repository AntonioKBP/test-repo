var _loop=function(o){cards[o].style.backgroundColor=getRandomHexColor(),cards[o].addEventListener("click",(function(){cards[o].classList.add("active")}))};function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}for(var cards=document.querySelectorAll(".card"),i=0;i<cards.length;i+=1)_loop(i);
//# sourceMappingURL=expand.5baf8042.js.map
