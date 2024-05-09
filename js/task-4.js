const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(form) {
    form.preventDefault();
    
    const formElements = form.currentTarget.elements;
    const inputEmailValue = formElements.email.value.trim();
    const inputPasswordValue = formElements.password.value.trim();

    if (!inputEmailValue || !inputPasswordValue) {
        return alert("All form fields must be filled in");
    }

    const formData = {
        email: inputEmailValue,
        password: inputPasswordValue,
    }

    console.log(formData);
    form.currentTarget.reset();
}
