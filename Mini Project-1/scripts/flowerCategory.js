document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.querySelector('#imageContainer')
  const imgURL = 'http://localhost:3000/images'

  fetch(`${imgURL}`)
    .then((response) => response.json())
    .then((imgData) =>
      imgData.slice().reverse().forEach(function (img) {
        if (`${img.category}` === 'flower') {
          imageContainer.innerHTML += `<div class="card shadow-sm">
          <img src="${img.link}" id=${img.id} class="modal-content" data-bs-toggle="modal" data-bs-target="#${img.title}-${img.id}" class="bd-placeholder-img card-img-top" width="100%" height="225" >

          <div class="card-body">
          <h5 class="card-title">${img.title}</h5>
          <p class="card-text">Author: ${img.author}</p>
          <b>${img.hashtag}</b>
              <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Comment</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>
                  </div>
              </div>
             
          </div>
      </div>
      
      <div class="modal fade" id="${img.title}-${img.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen modal-fullscreen-sm-down modal-fullscreen-md-down modal-fullscreen-lg-down modal-fullscreen-xl-down modal-fullscreen-xxl-down text-center">
        <div class="modal-content">
    
          <div  class="modal-body">
            
                  <img  src="${img.link}" height="80%" width="60%"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             
              
          </div>
         
        </div>
      </div>
</div>`
        }
      })
    )
})
