
$(document).ready(() => {
    $("button").click(() => {
      var email = $('input[type="email"]').val();
      var password = $('input[type="password"]').val();
      if (email == "" && password == "") {
        alert("Username and Password not entered");
      } else {
        $.ajax({
          url: " http://localhost:3000/users",
          method: "GET",
          data: {
            email: email,
            password: password,
          },
          dataType: "json",
          success: (x) => {
            for (i = 0; i < x.length; i++) {
              if (email == "admin@gmail.com" && password == "admin") {
                alert(email + " Successfully Login !");
                console.log(x);
                window.location = "./dashboard.html";
              } else if (email == x[i].email && password == x[i].password) {
                alert(email + " Successfully Login !");
                console.log(x);
                window.location = "./dashboard.html";
                
                
              } else {
                alert("Wrong Username or password");
              }
            }
          },
          error: (err) => {
            alert("Error: " + err);
          },
        });
      }
    });
  });
