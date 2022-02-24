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

        if (name == '') {
          alert('Enter name filed')
        } else if (email == '') {
          alert('Enter email filed')
        } else if (password == '') {
          alert('Enter password filed')
        } else if (confpassword == '') {
          alert('Enter confirm password filed')
        } else if (confpassword != password) {
          alert('Password & confirm password not matched')
        } else {
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
              window.location = '../HTML/login.html'
              alert(name + ' Successfully Registered !')
              console.log(x)
            },
            error: (err) => {
              alert('Error: ' + err)
            }
          })
          // } else {
          //   alert('Password does not match')
          // }
        }
      }

    )
  })
