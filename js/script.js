var sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', function(){
        section.classList.toggle('move-in');
    });
});