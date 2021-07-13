console.log("js started");

const temp = document.getElementsByClassName("temp")[0];
const humidity = document.getElementsByClassName("humidity")[0];

console.log(temp.textContent)
/* Fetch from API server*/



/*Get location selection from DOM*/
        const locationSelection = ((value)=>{
            console.log(value);
            fetchSelectedLocation(value)
        })

        /*Translation layer*/
        const fetchSelectedLocation = (value)=>{
            let locations = { lr: "https://climate-api.zohar-hadari.com:3000/get/livingrooms%20-l", os: "https://climate-api.zohar-hadari.com:3000/zones/outsides%20-l"}
            console.log('fetch', value);
            console.log(value);
            console.log(locations.value);
            console.log('[]',locations[value]);

            const apiCall = locations[value];
            fetchFuntion(apiCall);
          //  console.log(Object.values(locations))
        }

        /*fetch results*/

        fetchFuntion = (apiCall)=>{
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
            
              fetch(apiCall, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result) + update(result))
                .catch(error => console.log('error', error));
            

        }
      

/*Update DOM*/
    update =((result)=>{
        show = JSON.parse(result);
        result.json
        temp.textContent = show[0].C;
        humidity.textContent = show[0].H;
        console.log(temp.textContent);
    })
