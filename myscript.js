const numbers = document.getElementById("numbers");

const projectsPage = document.getElementById("projects-page")
const aboutPage = document.getElementById("about-page")
const contactPage = document.getElementById("contact-page");


function pageDisplay(display){
    switch(display){
        case "projects":
            projectsPage.style.display = "block";
            aboutPage.style.display = "none";
            contactPage.style.display = "none"
            break;
        case "about":
            projectsPage.style.display = "none";
            aboutPage.style.display = "grid";
            contactPage.style.display = "none";
            break;
        case "contact":
            projectsPage.style.display = "none";
            aboutPage.style.display = "none";
            contactPage.style.display = "block";
            break;
    }
}

numbers.forEach(num => {
    let ran = Math.floor(Math.random()*2)
    
})
