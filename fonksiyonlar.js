function updateDateTime() {
    const now = new Date();
    
    const dayOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'][now.getDay()];
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const dateString = `${dayOfWeek}, ${hours}:${minutes}:${seconds}`;
    
    document.getElementById('currentDateTime').textContent = dateString;
}

setInterval(updateDateTime, 1000);

updateDateTime();




