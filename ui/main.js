console.log('Loaded!');
var element = document.getElementById ('main-text');
element.innerHTML= "KRITIKA RAI DWIVEDI";
var img = document.getElementById('krd');
var  marginLeft = 0;
function moveRight()
{ 
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{var interval = setInterval(moveRight,50);
};
