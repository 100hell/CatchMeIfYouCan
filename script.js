var boxContainer = document.getElementById('box');

boxContainer.addEventListener('mouseover', function(event){
    
    // console.log("moused");
    
    let widthRange = document.documentElement.clientWidth - 100;
    let heightRange = document.documentElement.clientHeight - 80;
    
    let positionTop = Math.floor((Math.random() * heightRange) + 1);
    let positionLeft = Math.floor((Math.random() * widthRange) + 1);
    
    boxContainer.style.top = positionTop + "px";
    boxContainer.style.left = positionLeft + "px";
    
});