function toggleMenu(){
    document.querySelector('.nav-links').classList.toggle('active');
}

// close mobile menu on click

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });

});

// form submit

document.querySelector('.contact-form').addEventListener('submit', function(e){

    e.preventDefault();

    alert("Thank You! Your booking request has been sent.");

    this.reset();

});