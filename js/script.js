document.addEventListener('DOMContentLoaded', function() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    skillProgressBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill-level');
        bar.style.width = `${skillLevel}%`;
    });
});
