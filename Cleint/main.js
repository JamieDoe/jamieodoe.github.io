

function section1() {
    let header = document.querySelector(".landingHeader");
    let typed = new Typed(header, {
        strings: ["Hello, I'm Jamie.", "A Software Engineer", "and Graphic Designer.", "Hello, I'm Jamie." + "<br>" + "A Software Engineer" + "<br>" + "and Graphic Designer."],
        typeSpeed: 45,
        backSpeed: 50,
        backDelay: 1000,
        loop: false,
        showCursor: false,
    });
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".headerContainer").style.top = "0";
    } else {
        document.querySelector(".headerContainer").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

function formEmail() {

    const submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        let selector = document.querySelector("#selector").value;
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let message = document.querySelector("#message").value;
        let body = 'Service: ' + selector + '<br>' + 'name: ' + name + '<br>' + 'email: ' + email + '<br>' + 'message: ' + message;
        
        Email.send({
            SecureToken : "285231fa-b690-4f18-a029-96f090cf63f0",
            To : 'jamieoliverdoe@gmail.com',
            From : 'jamieoliverdoe@gmail.com',
            Subject : "This is the subject",
            Body : body,
        }).then(
          alert("Thank you for contacting me! I will get back to you as soon as possible."),
        );
    });
}

function carousel() {
    const carousel = document.querySelector(".wrapper");
    let firstItem = carousel.querySelectorAll(".carouselItem")[0];
    arrowIcons = document.querySelectorAll("#work i");

    let isDragStart = false, prevPageX, prevScrollLeft;
    let firstItemWidth = firstItem.clientWidth;

    let firstItemStyle = window.getComputedStyle(firstItem);
    let borderLeft = parseFloat(firstItemStyle.borderLeftWidth);
    let borderRight = parseFloat(firstItemStyle.borderRightWidth);
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 

    let showHideIcons = () => {
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    };

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id == "left" ? -(firstItemWidth + borderLeft + borderRight) : (firstItemWidth + borderLeft + borderRight);
            showHideIcons();
        });
    });
    

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;

        autoSlide();
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("touchend", dragStop);


}
/*
function workBoxHidden() {
    document.querySelectorAll('.carouselItem').forEach(item => {
        item.addEventListener('mouseenter', (event) => {
            event.target.querySelector('.workBoxTitles').style.display = 'none';
            event.target.querySelector('.workBoxHidden').style.display = 'flex';
        });
    
        item.addEventListener('mouseleave', (event) => {
            event.target.querySelector('.workBoxTitles').style.display = 'block';
            event.target.querySelector('.workBoxHidden').style.display = 'none';
        });
    });
};

*/
/*

function carousel() {
    const carousel = document.querySelector(".wrapper");
    firstImg = carousel.querySelectorAll("img")[0];
    arrowIcons = document.querySelectorAll("#work i");

    let isDragStart = false, prevPageX, prevScrollLeft;
    let firstImgWidth = firstImg.clientWidth;

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        });
    });

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    const dragStop = () => {
        isDragStart = false;
    }
    
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mouseup", dragStop);
}
*/

function init() {
    //alert("This website is still under construction. It is only responsive for screens 1080p and above at the moment... Excuse the mess!");
    section1();
    carousel();
    formEmail();
    workBoxHidden()
}

window.onload = init();