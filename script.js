
let fullname=document.querySelector("#name");
let email=document.querySelector("#Email");
let country=document.querySelector("#country");
let phone=document.querySelector("#phone_number");
let state=document.querySelector("#state");
let city=document.querySelector("#city");
let village=document.querySelector("#village");



let completename=""
let mailId=""
let countryname="";
let phonenumber="";
let statename="";
let cityname="";
let villagename="";
if(localStorage.length>0){
    calling_data(); 
}
else{

if (fullname.value==""){
     completename=prompt("Please enter your full name");
}
if(email.value==""){
     mailId=prompt("please enter your email address");
}
if(country.value==""){
     countryname=prompt("Please enter your Country Name");
}
if(phone.value==""){
     phonenumber=prompt("Enter Your Phone Number");
}
if(state.value==""){
     statename=prompt("Enter State Name");
}
if(city.value==""){
     cityname=prompt("Enter City Name");
}
if(village.value==""){
     villagename=prompt("Enter Village Name");
}
let obj={
    
    name:`${completename}`,
    emailId:`${mailId}`,
    country:`${countryname}`,
    phnumber:`${phonenumber}`,
    state_Name:`${statename}`,
    city_name:`${cityname}`,
    village_name:`${villagename}`,
}
localStorage.setItem("details",JSON.stringify(obj))
calling_data()
}



function calling_data(){
    let result=JSON.parse(localStorage.getItem("details"));

    fullname.value=result.name;
    email.value=result.emailId;
    country.value=result.country;
    phone.value=result.phnumber;
    state.value=result.state_Name;
    city.value=result.city_name;
    village.value=result.village_name;
}


// // localStorage.setItem(
    
// // )

