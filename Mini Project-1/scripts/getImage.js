document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.querySelector('#imageContainer')
  const imgForm = document.querySelector('#img-form')
  const imgURL = 'http://localhost:3000/images'
  let output = ''

  const renderImages = (images) =>{
    images.slice().reverse().forEach(image=>{
      output +=`<div class="card shadow-sm">
      <img src="${image.link}" id=${image.id} class="modal-content" data-bs-toggle="modal" data-bs-target="#${image.title}-${image.id}" class="bd-placeholder-img card-img-top" width="100%" height="225" >
      <div class="card-body">
      <h5 class="card-title">${image.title}</h5>
      <p class="card-text">Author: ${image.author}</p>
      <b>${image.hashtag}</b>
          <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Comment</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>
              </div>
          </div>        
      </div>
  </div>
  <div class="modal fade" id="${image.title}-${image.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen modal-fullscreen-sm-down modal-fullscreen-md-down modal-fullscreen-lg-down modal-fullscreen-xl-down modal-fullscreen-xxl-down text-center">
      <div class="modal-content">
        <div  class="modal-body">        
          <img  src="${image.link}" height="80%" width="60%"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>     
      </div>
    </div>
  </div>`
    })
    imageContainer.innerHTML = output
  }

  fetch(imgURL)
    .then((response) => response.json())
    .then(data => renderImages(data))

    //POST images
    imgForm.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(e.target)
    
      const titleInput = imgForm.querySelector('#imageTitle').value
      const linkInput = imgForm.querySelector('#imageLink').value
      const authorInput = imgForm.querySelector('#imageAuthor').value
      const hashtagInput = imgForm.querySelector('#imageHashtag').value
      const category = imgForm.querySelector('#category1').value
    
      if (titleInput == '' || linkInput == '' || authorInput == '' || hashtagInput == '') {
        alert('Please input all fields')
      } else {
        fetch(`${imgURL}`, {
          method: 'POST',
          body: JSON.stringify({
            title: titleInput,
            author: authorInput,
            hashtag: hashtagInput,
            link: linkInput,
            category: category
    
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => response.json())
          .then((img) => {
            alert('Image Successfully Uploaded')
          })
      }
    })
})
