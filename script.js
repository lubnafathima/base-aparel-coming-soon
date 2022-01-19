// 'use strict';

input = document.querySelector(".email");
submit = document.querySelector(".submit");
msg = document.querySelector(".message");
error_msg = document.querySelector(".error");

let email_format = '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/';

input.addEventListener("invalid", (event) => {
    event.preventDefault();
});
submit.addEventListener("click", () => {
    if(!input.value.match(email_format)) {
        msg.style.display = "block";
        error_msg.style.display = "block";
    } else {
        if(msg.style.display="block") {
        error_msg.style.display = "none";
        } else if ( error_msg.style.display="block") {
            Msg.style.display = "none";
        }
    }
});