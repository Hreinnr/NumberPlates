function getInfo(numer){
  fetch('http://apis.is/car?number=' + numer)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      showInfo(myJson);
      console.log(JSON.stringify(myJson));
    });
}

function showInfo(data){
  console.log(data.results[0]);
  var type = data.results[0].type;
  var subType = data.results[0].subType;
  var color = data.results[0].color;
  var weight = data.results[0].weight;
  var status = data.results[0].status;
  var registryNumber = data.results[0].registryNumber;
  var registeredAt = data.results[0].registeredAt;
  var pollution = data.results[0].pollution;
  var nextCheck = data.results[0].nextCheck;
  var factoryNumber = data.results[0].factoryNumber;
  document.getElementById("type").innerHTML = type;
  document.getElementById("subType").innerHTML = subType;
  document.getElementById("color").innerHTML = color;
  document.getElementById("weight").innerHTML = weight;
  document.getElementById("status").innerHTML = status;
  document.getElementById("registryNumber").innerHTML = registryNumber;
  document.getElementById("registeredAt").innerHTML = registeredAt;
  document.getElementById("pollution").innerHTML = pollution;
  document.getElementById("nextCheck").innerHTML = nextCheck;
  document.getElementById("factoryNumber").innerHTML = factoryNumber;
}
