console.log("js started");

const temp = document.getElementsByClassName("temp")[0];
const humidity = document.getElementsByClassName("humidity")[0];


/* Fetch from API server*/
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

  fetch("https://climate-api.zohar-hadari.com:3000/get/livingrooms%20-l", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



  fetch("https://climate-api.zohar-hadari.com:3000/get/livingrooms%20-l", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result) + update(result))
    .catch(error => console.log('error', error));




    update =((result)=>{
        show = JSON.parse(result);
        result.json
        temp.textContent = show[0].C;
        humidity.textContent = show[0].H;
    })