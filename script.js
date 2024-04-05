function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    // add or open the open class by toggle fuction 
    icon.classList.toggle("open");
    console.log("function initiated");
}