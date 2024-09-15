document.addEventListener("DOMContentLoaded", () => {
    
    const images = document.querySelectorAll("img");

    for(image of images) {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(Response => Response.json ())
        .then(data =>{

        image.scr = data.message
        image.width = 100;
        image.height = 100;
    })
}

})