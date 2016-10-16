console.log('Loaded!');
var element = document.getElementById ('main-text');
element.innerHTML= "KRITIKA RAI DWIVEDI";
var img = document.getElementById('krd');
var  marginLeft = 0;
    var moveRight = function()
{ 
    marginLeft = marginLeft + 10;
    img.marginLeft.style = marginLeft + 'px';
};
krd.onclick = function()
{var interval = setInterval(moveRight,100);
};
