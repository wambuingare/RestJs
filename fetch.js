function loadJSONproducts(){
  fetch('nancy.json')
  .then(response => response.json())
  .then(data => {
      for(var z=0; z<data.length; z++){
          document.getElementById("products").innerHTML += data[z].name +" :" +data[z].category
      }
      console.log(data)
      document.querySelector("#fruList").innerText = data.category = "fruits"
      document.querySelector("#vegList").innerText = data.category = "vegetables"
  })
  .catch(error => {
      console.log("error")
  })
}
loadJSONproducts()