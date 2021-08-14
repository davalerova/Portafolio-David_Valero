const header = document.getElementById("header");

document.addEventListener("scroll", scrollHeaderTop);

function scrollHeaderTop(){

    if(window.scrollY > 500){
        console.log(window.scrollY);
        header.classList.remove("header");
        header.classList.add("fixed-header");
    }else if(window.scrollY === 0){
        header.classList.remove("fixed-header");
    }
}

