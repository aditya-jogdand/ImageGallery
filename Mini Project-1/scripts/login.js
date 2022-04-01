/* eslint-disable eqeqeq */
/* eslint-disable no-undef */

$(document).ready(() => {
  $('button').click(() => {
    const email = $('input[type="email"]').val()
    const password = $('input[type="password"]').val()

    if (email == '' && password == '' || email==''||password=='') {
      alert('Username and Password not entered')
    } else {
      $.ajax({
        url: ' http://localhost:3000/users',
        method: 'GET',
        data: {
          email: email,
          password: password
        },
        dataType: 'json',
        success: (users) => {
          var flag=0
          users.forEach(user=>{
            if(email == user.email && password == user.password){
              flag=1;
            }
          })
if(flag == 1){
  alert('Login Successful!')
  window.location = './dashboard.html'
sessionStorage.setItem("email",email)
sessionStorage.setItem("password",password)




}
else{
  alert('invalid credentials')
}
       
        },
        error: (err) => {
          alert('Error: ' + err)
        }
      })
    }
  })
})
