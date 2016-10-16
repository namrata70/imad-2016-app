console.log('Loaded!');
var element = document.getElementById ('main-text');
element.innerHTML= "KRITIKA RAI DWIVEDI";
var element = document.getElementById('krd');
var  marginLeft = 0;
    var moveRight = function()
{ 
    marginLeft = marginLeft + 10;
    krd.marginLeft.style = marginLeft + 'px';
};
krd.onclick = function()
{var interval = setInterval(moveRight,100);
};
