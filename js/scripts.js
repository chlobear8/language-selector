window.addEventListener("load", function() {
  const clickHere= document.getElementById("click here");
  const btn= document.getElementById("submit");
  let head= document.getElementById("header");
  let formDiv= document.getElementById("form");
  let nameSpan= document.getElementById("name-span");
  let languageSpan= document.getElementById("language-span")
  let resultInfo= document.getElementById("result-info");

  function handleClickHere () {
    head.classList.add("invisible");
    formDiv.classList.remove("invisible");
  }

  function handleSelect(event) {
    event.preventDefault();
    const nameInput= document.getElementById("input-name").value;
    const favPet=document.getElementById("pet-type").value;
    const favColor=document.getElementById("color-type").value;
    const favHoliday=document.getElementById("holiday-type").value;
    const favMusic=document.getElementById("music-type").value;
    const favMovie=document.getElementById("movie-type").value;
    let languageInput= "python";

    if (favPet==="dog" || favPet==="cat" || favColor==="red") {
      languageInput= "ruby";
     } else if (favPet==="bird") {
      languageInput= "javascript"
     } else {
      languageInput= "python"
     }
    let resultDiv= document.getElementById("result-info");
    resultDiv.setAttribute("class", "invisible");
    nameSpan.innerText= nameInput;
    languageSpan.innerText= languageInput;
    resultInfo.classList.remove("invisible");
  }

  document.getElementById ("select-form").addEventListener("submit", handleSelect);
  document.getElementById ("click-here").addEventListener("click", handleClickHere);

});
