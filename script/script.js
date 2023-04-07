//hides navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
        prevScrollpos = currentScrollPos;
    }

//projects window
function changeProjectWindow(button_id) {
    hideProjectWindow();
    showProjectWindow(button_id);
}

//hides all projects windows before showing the selected one
function hideProjectWindow() {
    for(let i = 1; i <= 6; i++) {
        var id = "project-content";
        id = id += i;
        document.getElementById(id).style.display = "none";
    }
}
    
function showProjectWindow(button_id) {
    document.getElementById("project-title").innerHTML = document.getElementById(button_id).innerHTML.bold();
    switch(button_id) {
        case "project1":
            document.getElementById("project-content1").style.display = "block";
            break;
        case "project2":
        document.getElementById("project-content2").style.display = "block";
            break;
        case "project3":
        document.getElementById("project-content3").style.display = "block";
            break;
        case "project4":
        document.getElementById("project-content4").style.display = "block";
            break;
        case "project5":
        document.getElementById("project-content5").style.display = "block";
            break;
        case "project6":
        document.getElementById("project-content6").style.display = "block";
            break;
    }
}