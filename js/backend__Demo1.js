const sideMenuSwitch = document.querySelector("#sideMenu__switch")
const optionsBar = document.querySelector(".optionsBar")
const content = document.querySelector(".content")

sideMenuSwitch.addEventListener('click', event=>{
  if(event.target.checked){
    optionsBar.style.zIndex = "2"
    optionsBar.style.paddingLeft = "20%";
    content.style.paddingLeft = "20%";
  }else{
    optionsBar.style.zIndex="3";
    optionsBar.style.paddingLeft = "10px";
    content.style.paddingLeft = "30px";
  }
})