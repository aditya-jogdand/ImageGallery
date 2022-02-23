$(document).ready(
    () => {
        $('button').click(
            (e) => {
                e.preventDefault();
                var name = $('input[type="text"]').val();
                var email = $('input[type="email"]').val();
                var password = $('input[type="password"]').val();
                var confpassword = $('input[id="confpassword"]').val();
                console.log(password);
                console.log(confpassword);

        if(name=='' || email=='' || password=='' || confpassword==''){
        alert("Username and Password not entered");
        }
        else{
            if(password === confpassword && password !=""){
                $.ajax({
                    url: " http://localhost:3000/users",
                    method:"POST",
                    data: {
                        "name": name,
                        "email": email,
                        "password": password,
                    },
                    dataType:"json",
                    success:(x)=> {
                        
                        window.location="../HTML/login.html";
                        alert(name + " Successfully Registered !");
                        console.log(x);

                    },
                    error: (err) => {
                        alert("Error: " + err);
                    }
                })
            }
            else{
                alert("Password does not match");
            }
            }
            }

        )

    })

    

  