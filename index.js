        async function fetchCredentials() {
            const response = await fetch('credentials.json');
            return response.json();
        }

        async function handleLogin(event) {
            event.preventDefault();

            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;

            const credentials = await fetchCredentials();

            if (usernameInput === credentials.username && passwordInput === credentials.password) {
                window.location.href = 'home.html';
            } else {
                alert('Invalid username or password');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('login_form').addEventListener('submit', handleLogin);
        });  
