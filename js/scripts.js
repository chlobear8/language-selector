function handleSelect(event) {
  event.preventDefault();
  const selection=documentGetElementById("pet-type").value;
}
window.addEventListener("load", function()) {
  document.getElementById ("select-form").addEventListener("submit", handleSelect);
});
