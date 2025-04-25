
function checkLogin() {
    var first = document.getElementById("login2").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { 
        document.getElementById("login_Check").style.color = "green";
        document.getElementById("login_Check").innerHTML = "Корректный ввод :)";
        return true;
    }
    else {
        document.getElementById("login_Check").style.color = "red";
        document.getElementById("login_Check").innerHTML = "Пожалуйста, введите от 2 до 15 символов.";
        return false;
    }
}


function checkPhone() {
    var phone = document.getElementById("phone2").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { 
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Телефон подходит.";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Некорректный ввод.";
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById("email2").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Email корректный";
        return true;
    } else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Некорректный ввод. Пример: Ivanov@mail.ru";
        return false;
    }
}

function checkPassword() {
    var password = document.getElementById("password2").value;


    var hasNumber = /\d/;

    if (password.length >= 6 && hasNumber.test(password)) {
        document.getElementById("password_Check").style.color = "green";
        document.getElementById("password_Check").innerHTML = "Пароль подходит.";
        return true;
    } else if (password.length < 8) {
        document.getElementById("password_Check").style.color = "red";
        document.getElementById("password_Check").innerHTML = "Пароль должен быть не меньше 8 символов.";
        return false;
    } else if (!hasNumber.test(password)) {
        document.getElementById("password_Check").style.color = "red";
        document.getElementById("password_Check").innerHTML = "Пароль должен содержать хотя бы одну цифру.";
        return false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    var login = document.getElementById("login2").value;
    var email = document.getElementById("email2").value;
    var phone = document.getElementById("phone2").value;
    var password = document.getElementById("password2").value;


    alert("Login: " + login + "\n" +
          "Email: " + email + "\n" +
          "Phone: " + phone + "\n" +
          "Password: " + password);

    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.querySelector(".input-text2");

    mainTitle.addEventListener("mouseenter", function () {
        mainTitle.style.color = "red"; 
    });

    mainTitle.addEventListener("mouseleave", function () {
        mainTitle.style.color = ""; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    logo.style.cursor = "pointer"; 

    logo.addEventListener("click", function () {
        logo.style.visibility = "hidden"; 
    });
});
