const validate = () => {
    const email = document.getElementById("email"),
        password = document.getElementById("password"),
        repeatPassword = document.getElementById("repeat-password")

    const emailRegExp = /^[a-z0-9._%+-]{4,16}@gmail\.com$/i
    const passwordRegExp = /^[A-Z][a-z0-9]{3,15}\d$/

    if (!emailRegExp.test(email.value)) {
        alert("email должен содержать от 4 до 16 символов и знак @ и gmail.com!")
        return
    }
    else if (!passwordRegExp.test(password.value)) {
        alert("password должен содержать от 4 до 16 символов, " +
            "также должен содержать большую букву вначале и цифру как минимум одну!")
        return
    }
    else if (password.value !== repeatPassword.value) {
        alert("Убедитесь в правильности введения пароля!")
        return
    }

    alert("Вы успешно зарегистрировались!")
}

const btn = document.querySelector('.sign_btn').onclick = () => validate()