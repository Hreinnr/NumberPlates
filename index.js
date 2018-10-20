function getInfo(numer){
  fetch('http://apis.is/car?number=' + numer)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
}
