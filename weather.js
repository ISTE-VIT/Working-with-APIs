var url="http://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=0a65e98338a3cfc2a4c23f39bc8b8b53";
async function getdata(){
  const response=await fetch(url);
  const json=await response.json();
  const main=json.main;
  console.log(main);
  var city=json.name;
  document.getElementById('city').innerHTML=city;
  console.log(city);
  var temp=main.temp;
  document.getElementById('temp').innerHTML=temp;
  console.log(temp);

}
getdata();
