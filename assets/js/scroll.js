const home = document.getElementById("home");
const header = document.getElementById("header");
const about = document.getElementById("about");
const services = document.getElementById("services");
const portfolio = document.getElementById("portfolio");
const testimonials = document.getElementById("testimonials");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");
const item_home = document.getElementById("item-home");
const item_about = document.getElementById("item-about");
const item_services = document.getElementById("item-services");
const item_portfolio = document.getElementById("item-portfolio");
const item_testimonials = document.getElementById("item-testimonials");
const item_blog = document.getElementById("item-blog");
const item_contact = document.getElementById("item-contact");


// const height_about = about.getBoundingClientRect().top;
const height_about = about.getBoundingClientRect().top;
const height_services = services.getBoundingClientRect().top;
const height_portfolio = portfolio.getBoundingClientRect().top;
const height_testimonials = testimonials.getBoundingClientRect().top;
const height_blog = blog.getBoundingClientRect().top;
const height_contact = contact.getBoundingClientRect().top;

console.log(height_about, height_services, height_portfolio, height_testimonials, height_blog, height_contact);

function clear_active(){
    item_home.classList.remove("item-active");
    item_about.classList.remove("item-active");
    item_services.classList.remove("item-active");
    item_portfolio.classList.remove("item-active");
    item_testimonials.classList.remove("item-active");
    item_blog.classList.remove("item-active");
    item_contact.classList.remove("item-active");
};

document.addEventListener("scroll", scrollHeaderTop);


function home_active(){
    clear_active();
    home.classList.add("item-active");
    console.log("Clic home");
}
function about_active(){
    clear_active();
    about.classList.add("item-active");
    console.log("Clic about");
}
function services_active(){
    clear_active();
    services.classList.add("item-active");
    console.log("Clic services");
}
function portfolio_active(){
    clear_active();
    portfolio.classList.add("item-active");
    console.log("Clic portfolio");
}
function testimonials_active(){
    clear_active();
    testimonials.classList.add("item-active");
    console.log("Clic testimonials");
}
function blog_active(){
    clear_active();
    blog.classList.add("item-active");
    console.log("Clic blog");
}
function contact_active(){
    clear_active();
    contact.classList.add("item-active");
    console.log("Clic contact");
}




function scrollHeaderTop(){
    // console.log(window.scrollY, height_about, height_services);
    item_home.classList.add("item-active");
    item_about.classList.remove("item-active");
    if(window.scrollY >= height_about){
        item_home.classList.remove("item-active");
        item_services.classList.remove("item-active");
        item_portfolio.classList.remove("item-active");
        item_testimonials.classList.remove("item-active");
        item_blog.classList.remove("item-active");
        item_contact.classList.remove("item-active");
        item_about.classList.add("item-active");
    }
    if(window.scrollY >= height_services){
        item_home.classList.remove("item-active");
        item_about.classList.remove("item-active");
        item_portfolio.classList.remove("item-active");
        item_testimonials.classList.remove("item-active");
        item_blog.classList.remove("item-active");
        item_contact.classList.remove("item-active");
        item_services.classList.add("item-active");
    }
    if(window.scrollY >= height_portfolio){
        item_home.classList.remove("item-active");
        item_about.classList.remove("item-active");
        item_services.classList.remove("item-active");
        item_testimonials.classList.remove("item-active");
        item_blog.classList.remove("item-active");
        item_contact.classList.remove("item-active");
        item_portfolio.classList.add("item-active");
    }
    if(window.scrollY >= height_testimonials){
        item_home.classList.remove("item-active");
        item_about.classList.remove("item-active");
        item_services.classList.remove("item-active");
        item_portfolio.classList.remove("item-active");
        item_blog.classList.remove("item-active");
        item_contact.classList.remove("item-active");
        item_testimonials.classList.add("item-active");
    }
    if(window.scrollY >= height_blog){
        item_home.classList.remove("item-active");
        item_about.classList.remove("item-active");
        item_services.classList.remove("item-active");
        item_portfolio.classList.remove("item-active");
        item_testimonials.classList.remove("item-active");
        item_contact.classList.remove("item-active");
        item_blog.classList.add("item-active");
    }
    if(window.scrollY >= height_contact){
        item_home.classList.remove("item-active");
        item_about.classList.remove("item-active");
        item_services.classList.remove("item-active");
        item_portfolio.classList.remove("item-active");
        item_testimonials.classList.remove("item-active");
        item_blog.classList.remove("item-active");
        item_contact.classList.add("item-active");
    }
    
}

item_home.onclick = home_active;
item_about.onclick = about_active;
item_blog.onclick = blog_active;
item_services.onclick = services_active;
item_portfolio.onclick = portfolio_active;
item_testimonials.onclick = testimonials_active;
item_contact.onclick = contact_active;