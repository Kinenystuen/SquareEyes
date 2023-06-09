

const button = document.getElementById("shopping_bag_button");
const buttonText =document.getElementById("button_text");

function toggleButtonText(button) {
    var buttonText = button.querySelector("#button_text");
    
    if (buttonText.innerText === "Add") {
      buttonText.innerText = "Added";
    } else {
      buttonText.innerText = "Add";
    }
  }