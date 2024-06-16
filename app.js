window.onscroll = () => {
    const navBar = document.getElementById("navBar");
    if (scrollY > 33) {
        navBar.style.backgroundColor('white');
    } else {
        navBar.classList.remove('navbar-blur');
    }
}

function returnTop(){
    document.body.scrollTop=0;
}