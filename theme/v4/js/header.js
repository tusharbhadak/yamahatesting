let lastScrollTop = 0;
const navbarContainer = document.getElementById('navbarContainer');
let headerVisible = true;
let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Determine scroll direction
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (headerVisible) {
            navbarContainer.classList.add('hidden');
            headerVisible = false;
        }
    } else {
        // Scrolling up
        if (!headerVisible) {
            navbarContainer.classList.remove('hidden');
            headerVisible = true;
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});
