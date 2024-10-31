
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const buttonIcon = document.querySelector('.toggle-button i');

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        content.classList.remove('shifted');
        buttonIcon.classList.remove('fa-times');
        buttonIcon.classList.add('fa-bars');
    } else {
        setTimeout(() => {
            sidebar.classList.add('open');
            content.classList.add('shifted');
            buttonIcon.classList.remove('fa-bars');
            buttonIcon.classList.add('fa-times');
        }, 150); // Delay 150ms untuk membuka sidebar
    }
}
setInterval(updateClock, 1000);
    updateClock();

    var modal = document.getElementById("myModal");
    var menuIcon = document.getElementById("menuIcon");
    var span = document.getElementsByClassName("close")[0];
    menuIcon.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }