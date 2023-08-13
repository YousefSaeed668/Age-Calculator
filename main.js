let dayInput = document.getElementById("day");
let mounthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let yearShow = document.querySelector(".year span");
let monthShow = document.querySelector(".month span");
let dayShow = document.querySelector(".day span");

let btnCall = document.getElementById("arrow");

let yes = true;



function getDate(){

let date = new Date()
date.setFullYear(`${yearInput.value}` , `${mounthInput.value - 1}` ,`${dayInput.value}`)
date.getDate()
console.log(dayInput.value)

  calc(date.getTime())
}
function calc(value){
  let dateNow = new Date().getTime();
  dateDiff = dateNow - value;
  console.log(Math.floor(dateDiff / 31556952000))
  let years = Math.floor(dateDiff / 31556952000);

  let month = Math.floor((dateDiff % 31556952000) / 2629746000);

  let day = Math.floor(((dateDiff % 31556952000) % 2629746000) / 86400000)
  filterData(years,month,day)
  yes = true;
}



function showData(years,month,day){

  if(years < 10){
    yearShow.innerHTML = "0"+years;
  }else {
    yearShow.innerHTML = years ;
  }

  if(month < 10){
    monthShow.innerHTML = "0"+month;
  }else {
    monthShow.innerHTML = month ;
  }

  if(day < 10){
    dayShow.innerHTML = "0" +day ;
  }else {
    dayShow.innerHTML = day ;
  }


}

function filterData(years,month,day){

  if(years < 0 || years > 150){
    yes = false;
    document.querySelector(".year .error").style.display = "block"
    document.querySelector(".year input").classList.add("border");
    document.querySelector(".year label").style.color="hsl(0, 100%, 67%)"
  
  }else {
    document.querySelector(".year .error").style.display = "none"
    document.querySelector(".year input").classList.remove("border");
    document.querySelector(".year label").style.color="hsl(0, 1%, 44%)"
  }
    if (mounthInput.value > 12 || mounthInput.value <= 0){
      yes = false;
    document.querySelector(".month .error").style.display = "block"
    document.querySelector(".month input").classList.add("border");
    document.querySelector(".month label").style.color="hsl(0, 100%, 67%)"
    }else {
    document.querySelector(".month .error").style.display = "none"
    document.querySelector(".month input").classList.remove("border");
    document.querySelector(".month label").style.color="hsl(0, 1%, 44%)"

    }
      if (dayInput.value > 31 ||dayInput.value <= 0){
        yes = false;
        document.querySelector(".year day").style.color="hsl(0, 100%, 67%)"
        
        document.querySelector(".day .error").style.display = "block"
      document.querySelector(".day input").classList.add("border");
  
      }else{
        document.querySelector(".day .error").style.display = "none"
        document.querySelector(".day input").classList.remove("border");
      document.querySelector(".day label").style.color="hsl(0, 1%, 44%)"

  
        
      
    }
      if (yes === true){

        showData(years,month,day)
      }

  }






btnCall.addEventListener("click",getDate)






