function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const storedUser = localStorage.getItem(username.value);

    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.password === password.value) {
            alert("Login successful!");
            window.location.href = "secured_page.html";
        } else {
            alert("Invalid password.");
        }
    } else {
        alert("User not found.");
    }
}

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const newUser = { username, password };
    localStorage.setItem(username, JSON.stringify(newUser));
    
    alert("Registration successful! You can now log in.");
    window.location.href = "index.html";
}

function logout() {
    localStorage.clear();
    alert("Logged out successfully.");
    window.location.href = "index.html";
}
