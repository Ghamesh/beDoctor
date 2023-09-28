//Menu item services pop up



// Select the menu items
const serviceTab = document.querySelector('.service-tab');
const aboutTab = document.querySelector('.about-tab');
const packageTab = document.querySelector('.package-tab');
const contactTab = document.querySelector('.contact-tab');
const menu = document.querySelector('.menu')
const mainHedding = document.querySelector('.main-hedding')
const mainImage = document.querySelector('.main-image')
const homeTab = document.querySelector('.home-tab')



// Select the pop-up element
const popUp = serviceTab.querySelector('.pop-up');


// Function to show the pop-up
function showPopUp() {
    popUp.style.display = 'flex';
}

// Function to hide the pop-up
function hidePopUp() {
    popUp.style.display = 'none';
}

// Add event listeners for mouseenter and mouseleave on each menu item
serviceTab.addEventListener('mouseenter', showPopUp);
aboutTab.addEventListener('mouseenter', hidePopUp);
packageTab.addEventListener('mouseenter', hidePopUp);
contactTab.addEventListener('mouseenter', hidePopUp);
homeTab.addEventListener('mouseenter', hidePopUp)

//serviceTab.addEventListener('mouseleave', hidePopUp);
serviceTab.addEventListener('click' , showPopUp);
menu.addEventListener('mouseenter', hidePopUp)
mainHedding.addEventListener('mouseenter', hidePopUp)
mainImage.addEventListener('mouseenter', hidePopUp)


const togBtn = document.querySelector('.tog-btn');
const navMenu = document.querySelector('.nav-menu');

togBtn.addEventListener('click', () => {
    // Check current display property
    const currentDisplay = window.getComputedStyle(navMenu).getPropertyValue('display');
    
    // Toggle display property
    if (currentDisplay === 'none') {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
});



