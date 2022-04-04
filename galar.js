var lat1,lon1,distance;
var audio = new Audio('https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/7120-download-iphone-6-original-ringtone-42676.mp3')
function toRad(x)
{
	return x* Math.PI / 180;
}
function haversine()
    {
        console.log("lat1",lat1);
        console.log("lon1",lon1);
var result = document.getElementById('distance')
var lat2 = document.getElementById('lat2').value 
var lon2 = document.getElementById('lon2').value
        // distance between latitudes
        // and longitudes
        let dLat = (lat2 - lat1) * Math.PI / 180.0;
        let dLon = (lon2 - lon1) * Math.PI / 180.0;
           
        // convert to radiansa
        lat1 = (lat1) * Math.PI / 180.0;
        lat2 = (lat2) * Math.PI / 180.0;
         
        // apply formulae
        let a = Math.pow(Math.sin(dLat / 2), 2) +
                   Math.pow(Math.sin(dLon / 2), 2) *
                   Math.cos(lat1) *
                   Math.cos(lat2);
        let rad = 6371;
        let c = 2 * Math.asin(Math.sqrt(a));
        // return rad * c;
        // result.innerHTML=rad*c;
        distance= rad*c;
        console.log(distance);
if(distance<2)
{
    audio.play();
}         

}

function showLocation(position) {
             lat1 = position.coords.latitude;
             lon1 = position.coords.longitude;
            document.getElementById('lat1').value=lat1;
            document.getElementById('lon1').value=lon1;
         }

function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            } else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
}
            
function getLocation() {

if(navigator.geolocation) {               
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:25000};
               navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
            }
            else {
               alert("Sorry, browser does not support geolocation!");
            }
}





//11.76939 79.55734 13.00861 80.00363

// 12.950884479429899, 80.14542459831739