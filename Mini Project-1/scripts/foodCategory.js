document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector("#imageContainer");
    const imgURL = `http://localhost:3000/images`;
    const imgForm = document.querySelector("#img-form");//for upload image page use form class as img-form
  
    // const download = document.querySelector("#download");
  
    fetch(`${imgURL}`)
      .then((response) => response.json())
      .then((imgData) =>
       imgData.slice().reverse().forEach(function (img) {

            if(`${img.category}`==="food"){
  
          
          imageContainer.innerHTML += `<div class="card shadow-sm">
            <img src="${img.link}" id=${img.id} class="modal-content" class="bd-placeholder-img card-img-top" width="100%" height="225">
  
  
            <div class="card-body">
            <h5 class="card-title">${img.title}</h5>
            <p class="card-text">Author: ${img.author}</p>
            <b>${img.hashtag}</b>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Comment</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>
                    </div>
                </div>
            </div>
        </div>`;
            }

         
  
        })
      );
  });
  
  
  
  
  
  