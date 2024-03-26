//your JS code here. If required.
  window.onload = function() {
        if (localStorage.getItem("username") && localStorage.getItem("password")) {
            var existingButton = document.createElement("button");
            existingButton.id = "existing";
            existingButton.innerText = "Login as existing user";
            existingButton.addEventListener("click", function() {
                alert("Logged in as " + localStorage.getItem("username"));
            });
            document.body.appendChild(existingButton);
        }
    };

    // Submit function
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var remember = document.getElementById("checkbox").checked;

        if (remember) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert("Logged in as " + username);

        // Reset form
        document.getElementById("loginForm").reset();
    });