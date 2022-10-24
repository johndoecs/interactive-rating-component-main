
let rateContainer = document.querySelector(".rate");

rateContainer.addEventListener("click", rateSelect);

function rateSelect(e) {
    
    let buttons = rateContainer.children;
    
    for (let button of buttons) {
        if(e.target != button) {
            button.classList.remove("selected");
        }
    }

    addClass = e.target.classList.toggle("selected");
}

let rateForm = document.querySelector("#rateForm");

rateForm.addEventListener("submit", e => {
    e.preventDefault();
    let buttons = rateContainer.children;
    
    for (let button of buttons) {
        if(!button.classList.contains("selected")) {
            false;
        } else {
            
            editText = document.querySelector("article.thank-you p.info span");
            editText.textContent = button.value;

            hideRating = document.querySelector("article.rating");
            hideRating.style.display = "none";            
            showThankYou = document.querySelector("article.thank-you");
            showThankYou.style.display = "flex";
        }
    }
});
