function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    var fullNameError = document.getElementById("fullNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var mobileNumberError = document.getElementById("mobileNumberError");

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^.{6,}$/;
    var mobileRegex = /^\d{10}$/;

    if (!fullName.match(nameRegex)) {
        fullNameError.textContent = "Please enter a valid name";
        return false;
    } else {
        fullNameError.textContent = "";
    }

    if (!email.match(emailRegex)) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    } else {
        emailError.textContent = "";
    }

    if (!password.match(passwordRegex)) {
        passwordError.textContent = "Password must be at least 6 characters long";
        return false;
    } else {
        passwordError.textContent = "";
    }

    if (!mobileNumber.match(mobileRegex)) {
        mobileNumberError.textContent = "Please enter a valid 10-digit mobile number";
        return false;
    } else {
        mobileNumberError.textContent = "";

    }
    var formData = {
        fullName: fullName,
        email: email,
        password: password,
        mobileNumber: mobileNumber
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    return true;
}