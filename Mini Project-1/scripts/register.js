/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
$(document).ready(
  () => {
    $('button').click(
      (e) => {
        e.preventDefault()
        const name = $('input[type="text"]').val()
        const email = $('input[type="email"]').val()
        const password = $('input[type="password"]').val()
        const confpassword = $('input[id="confpassword"]').val()
        console.log(password)
        console.log(confpassword)

        if(name.length!=0 && email.length!=0 && password.length!=0 && confpassword!=0 && password==confpassword){
          // register new user
          $.ajax({
            url: ' http://localhost:3000/users',
            method: 'POST',
            data: {
              name: name,
              email: email,
              password: password
            },
            dataType: 'json',
            success: (x) => {
              window.location = '../html/signIn.html'
              alert(name + ' Successfully Registered !')
              console.log(x)
            },
            error: (err) => {
              alert('Error: ' + err)
            }
          })
        }
           else {
          alert('Please fill all fields')
          }
        }
      

    )
  })
