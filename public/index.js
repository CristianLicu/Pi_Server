const ws = new WebSocket("ws://192.168.0.115:8080");
console.log("verbinde....");
ws.addEventListener("open", () => {
  console.log("Client connected with server!");
});

ws.addEventListener("message", function (event) {
  const data = JSON.parse(event.data);
  switch (data.type) {
      case 'temperatur':
          document.getElementById("h1Temp").innerHTML() = data.value;
          break;

      case 'feuchtigkeit':
          document.getElementById("h1Feucht").innerHTML() = data.value;
          break;
  
      default:
          break;
  }
    
});