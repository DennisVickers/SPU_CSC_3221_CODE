/* Listners */
// function addClicked(e){
//   console.log(e.target);
//   console.log(e.target.value);
//   e.target.value = "Add";
  
//   e.preventDefault();
// };

// addEventListner(type, action)
// document.querySelector(".primary-button").addEventListener("click", addClicked);

document.querySelector(".primary-button").addEventListener("click", (e) => {
  e.target.value = "Added";
  e.preventDefault();  // Prevent default behavior of event type
})