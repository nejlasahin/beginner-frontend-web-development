function askName() {
    let name
    while (true) {
        name = prompt("Adınız nedir ?");
        if (name) {
            break;
        }
    }
    document.getElementById("name").innerHTML = name;
    showTime();
}

function showTime() {
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    document.getElementById("date").innerHTML = days[new Date().getDay()];
    setTimeout(showTime, 1000);
}