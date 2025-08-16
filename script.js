function calculateAge() {
    const birthDate = new Date('2004-07-24');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const ageElement = document.getElementById('age');
if (ageElement) {
    ageElement.textContent = calculateAge();
}