

function rotateImage1(id) {
    var img = document.getElementById(id); 
    var rot=img.style.transform
   
      
    if(rot){
        img.style.transform = 'rotate(360deg)';
        
    }
    else 
    {
        img.style.transform = 'rotate(45deg)';
        
    }
   
}



/*
* Http Header -> "Authorization: 3cdec8668663eb0907d2b47b63272480873a82ce" 
*/

/*
function makeRequest() {
    var request = new XMLHttpRequest();
    // Initialize a request
    request.open('get', 'https://api.github.com/users/SnehilDB/repos ')
    // Send it
    request.send();

    
}

makeRequest();
*/