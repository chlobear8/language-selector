window.addEventListener("load", function() {
  const clickHere= document.getElementById("click here");
  let head= document.getElementById("header");
  let formDiv= document.getElementById("form");
  let favPet= document.getElementById("pet-type");
  let favColor= document.getElementById("color-type");
  let favHoliday= document.getElementById("holiday-type");
  let favMusic= document.getElementById("music-type");
  let favMovie= document.getElementById("movie-type");
  let nameSpan= document.getElementById("name-span");
  let languageSpan= document.getElementById("language-span")
  let resultInfo= document.getElementById("result-info");

  function handleClickHere () {
    head.classList.add("invisible");
    formDiv.classList.remove("invisible");
  }

  function handleSelect(event) {
    event.preventDefault();
    const nameInput= document.getElementById("name-span").value;
    const languageInput= document.getElementById("language-span").value;
    const select1=document.getElementById("pet-type").value;
    const select2=document.getElementById("color-type").value;
    const select3=document.getElementById("holiday-type").value;
    const select4=document.getElementById("music-type").value;
    const select5=document.getElementById("movie-type").value;

    let resultDiv= document.getElementById("result-info");
    resultDiv.setAttribute("class", "innvisible");
    let nameSpan.innerText= nameInput;
    let languageSpan.innerText= languageInput;

    if ("submit") {
      resultDiv.removeAttribute("class");
    }
  }

  document.getElementById ("select-form").addEventListener("submit", handleSelect);
  document.getElementById ("click-here").addEventListener("click", handleClickHere);

  
});
