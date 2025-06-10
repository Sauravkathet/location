// document.querySelector('button').addEventListener("click", () => {
//     const button = document.querySelector('button');

//     if(navigator.geolocation){
//         button.innerText = "allow to detect location";

//         navigator.geolocation.getCurrentPosition(onSucess, onError);
//     } else {
//         button.innerText = "Your browser does not support geolocation";
//     }

//     function onSucess(position){
//         button.innerText = "Detecting location...";
//         let {latitude,longitude} = position.coords;
//         //https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}YOUR-API-KEY
//         //
//         fetch( `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=14a024b0dd184468a1104af1693f057f`)
//         .then(response => response.json()).then(result => {
//             let alldetails = result.results[0].components;
//             let { country, city, state, postcode } = alldetails;
//             postcode = postcode || 'N/A'; // Default to 'N/A' if postcode is not available
//             button.innerText = ` ${country}, ${state},${city}`;
//            console.table(alldetails);
//         }).catch(() =>{
//             button.innerText = "Something went wrong";
//         });
//     }

//     function onError(error){
//         // if user denies the request
//         button.innerText = "You denied the request for Geolocation.";
//         if(error.code == 1){ // if user denies the request
//             button.innerText = "You denied the request for Geolocation.";
//         } else if(error.code == 2){ // if location is not available
//             button.innerText = "Location information is unavailable.";
//         } else if(error.code == 3){ // if the request timed out
//             button.innerText = "The request to get user location timed out.";
//         } else { // if any other error occurs
//             button.innerText = "An unknown error occurred.";
//         }
//         button.setAttribute("disabled", true); // if user denies the request, the button will be disabled
//     }
// });

// // document.getElementsByClassName('details')[0].addEventListener("click", () => {
//     const details = document.getElementsByClassName('details')[0];
//     details.style.display = "block";
//     details.innerText = "hello";
// // });
    

        
         
    document.querySelector('button').addEventListener("click", () => {
        const button = document.querySelector('button');

        if(navigator.geolocation){
            button.innerText = "Allow to detect location";

            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } else {
            button.innerText = "Your browser does not support geolocation";
        }

        function onSuccess(position){
            button.innerText = "Detecting location...";
            let {latitude, longitude} = position.coords;
          
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=14a024b0dd184468a1104af1693f057f`)
            .then(response => response.json()).then(result => {
                let alldetails = result.results[0].components;
                let { country, city, state, postcode, suburb, road } = alldetails;
                postcode = postcode || 'N/A'; // Default to 'N/A' if postcode is not available
                button.innerText = `${road ? road + ', ' : ''}${suburb ? suburb + ', ' : ''}${city}, ${state}, ${country}`;
                console.table(alldetails);
            }).catch(() =>{
                button.innerText = "Something went wrong";
            });
        }

        function onError(error){
            // if user denies the request
            button.innerText = "You denied the request for Geolocation.";
            if(error.code == 1){ // if user denies the request
                button.innerText = "You denied the request for Geolocation.";
            } else if(error.code == 2){ // if location is not available
                button.innerText = "Location information is unavailable.";
            } else if(error.code == 3){ // if the request timed out
                button.innerText = "The request to get user location timed out.";
            } else { // if any other error occurs
                button.innerText = "An unknown error occurred.";
            }
            button.setAttribute("disabled", true); // if user denies the request, the button will be disabled
        }
    });
    