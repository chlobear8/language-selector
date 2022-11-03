window.addEventListener("load", function() {
  const clickHere= document.getElementById("click here");
  let head= document.getElementById("header");
  let formDiv= document.getElementById("form");
  let inputName= document.getElementById("input-name");
  let favPet= document.getElementById("pet-type");
  let favColor= document.getElementById("color-type");
  let favHoliday= document.getElementById("holiday-type");
  let favMusic= document.getElementById("music-type");
  let favMovie= document.getElementById("movie-type");
  let nameSpan= document.getElementById("name-span");
  
}

function handleSelect(event) {
  event.preventDefault();
  const selection=documentGetElementById("pet-type").value;
}
window.addEventListener("load", function() {
  document.getElementById ("select-form").addEventListener("submit", handleSelect);
});
