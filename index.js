        $(document).ready(function() {
            // โหลด credentials.json
            $.getJSON('credentials.json', function(credentials) {
                $('#login_form').on('submit', function(event) {
                    event.preventDefault();
                    const username = $('#username').val();
                    const password = $('#password').val();

                    // ตรวจสอบ username และ password
                    if (username === credentials.username && password === credentials.password) {
                        window.location.href = 'home.html';
                    } else {
                        alert('รหัสไม่ถูกต้อง');
                    }
                });
            });
        });
