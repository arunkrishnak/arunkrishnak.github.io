document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');

    profileCard.addEventListener('mousemove', (e) => {
        const rect = profileCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});