var t=true;
//rotating icons
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

//XHR
    var request = new XMLHttpRequest();
    
    request.open('GET', 'https://api.github.com/users/SnehilDB/repos ',true)
    
    request.send();
    request.onload=function()
    {

        var data = JSON.parse(request.responseText);
        repo(data);
    }
    
   
 

    function repo(data) 
    {
        
        
            document.getElementById("myimage1").addEventListener("click", myFunction);
         
            function myFunction()
            {
                if(t===true)
                {
                    var arrHead=new Array();
                    arrHead= ['Name', 'Link', 'Discription'];
                     
                    var repTable=document.createElement('TABLE');
                    repTable.setAttribute('border', 1);
                     
                    var tr=document.createElement('tr');
                     
                    for (var h=0; h<arrHead.length; h++) {
                    var th=document.createElement('th');
                    th.innerHTML=arrHead[h];
                    tr.appendChild(th);
                     }
                    repTable.appendChild(tr);
                    for (var i=0; i<data.length; i++) {
                    var sne=document.createElement('tr');
                    sne.innerHTML+=`<td>${data[i]["name"]}</td><td><a href=${data[i]["html_url"]}>${data[i]["html_url"]}</td></a><td>${data[i]["description"]}</td></tr>`
                    repTable.appendChild(sne);
                     }
                     
                    var div=document.getElementById('git');
                    div.appendChild(repTable);

                }
                t=false;
           
           
            }   
           
   
     
     
    }

    
  //for clock(dynamic)

  function startTime() 
  {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML=h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    checkTime();
  }
 
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
  
  


  

    
    
    



