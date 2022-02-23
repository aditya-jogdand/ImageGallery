// post images categorywise

const imgForm = document.querySelector("#img-form");
const imgURL = `http://localhost:3000/images`;
imgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);

    const titleInput = imgForm.querySelector("#imageTitle").value;
    const linkInput = imgForm.querySelector("#imageLink").value;
    const authorInput = imgForm.querySelector("#imageAuthor").value;
    const hashtagInput = imgForm.querySelector("#imageHashtag").value;
    const category = imgForm.querySelector("#category1").value;


    if (titleInput == "" || linkInput == "" || authorInput == "" || hashtagInput == "") {
        alert("Please input all fields")
    }
    else {
        fetch(`${imgURL}`, {
            method: "POST",
            body: JSON.stringify({
                title: titleInput,
                author: authorInput,
                hashtag: hashtagInput,
                link: linkInput,
                category: category

            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((img) => {
                alert("Image Successfully Uploaded")
            });
    }
});