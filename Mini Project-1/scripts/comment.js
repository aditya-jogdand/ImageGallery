
document.addEventListener("DOMContentLoaded", function () {
  const carsContainer = document.querySelector("#imageContainer");
  const carsURL = `http://localhost:3000/images`;
  let addComment ;
  let allImages=[];
  function comments(img){
    string="Comments :";
    if(img.comments.length){
       (img.comments.forEach((comment,index)=>{
         index++;
        string+="<p>"+index+") "+comment+"</p>"
      }))
      return string;
    }
    else{
      return "comments: 0";
    }
  }
  
  fetch(`${carsURL}`)
    .then((response) => response.json())
    .then((imgData) =>
     imgData.slice().reverse().forEach(function (img) {
        allImages=imgData
        carsContainer.innerHTML += `<div class="card shadow-sm">
        <img src="${img.link}" id=${img.id} class="modal-content" class="bd-placeholder-img card-img-top" width="100%" height="225">


        <div class="card-body">
        <h5 class="card-title">${img.title}</h5>
        <p class="card-text">Author: ${img.author}</p>
        <b>${img.hashtag}</b>
             
            <button data-id="${img.id}" data-action="addComment">Add Comment</button>
        </div>
    </div>`;
      
      })
    ); 

    carsContainer.addEventListener("click", (e) => {
    let imageData;
    if(e.target.dataset.action==="addComment"){
       
      console.log("Got inside",e.target.dataset.id);
      
       imageData=allImages.find((image)=>{
        return image.id==e.target.dataset.id
      })
      console.log(imageData)
      e.target.parentElement.innerHTML+=`<div id="add-comment"><form id="comments"><input id="add-comment" type="text"><input type="submit" value="Add Comment"></form></div>`
    }
    addComment=document.querySelector("#comments")
    addComment.addEventListener("submit", (e) => {
    
      e.preventDefault();
            
    const comment = addComment.querySelector("#add-comment").value;
      imageData.addComment.comment.push(data);
      fetch(`${carsURL}/${imageData.id}`, {
        method: "PATCH",
        body: JSON.stringify({  
          comments: imageData.comments,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      
    });
    
  });
  
});