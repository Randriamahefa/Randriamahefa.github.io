var modal = document.getElementById('myModal');
var img = document.getElementsByClassName("imgPortefolio");
var modalImg = document.getElementsByClassName("modal-content")
var captionText = document.getElementById("caption");

for (let i = 0; i < 7; i++) {
    
    img[i].onclick = function(){
        
        modal.style.display = "block";
        modalImg[0].src = this.src;
        captionText.innerHTML = this.alt;
    }
    
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
