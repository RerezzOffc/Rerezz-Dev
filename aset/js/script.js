function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}
function toggleSidebarRight() {
    document.getElementById("sidebarRight").classList.toggle("open");
}



/*
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();

        // Daftar hari dan bulan dalam bahasa Indonesia
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const months = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        // Menambahkan offset WIB (+7 jam)
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const wibTime = new Date(utc + (3600000 * 7));

        // Mendapatkan komponen tanggal dan waktu
        const dayName = days[wibTime.getDay()];
        const day = String(wibTime.getDate()).padStart(2, '0');
        const month = months[wibTime.getMonth()];
        const year = wibTime.getFullYear();
        const hours = String(wibTime.getHours()).padStart(2, '0');
        const minutes = String(wibTime.getMinutes()).padStart(2, '0');
        const seconds = String(wibTime.getSeconds()).padStart(2, '0');

        // Format waktu lengkap
        const timeString = `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds} WIB`;

        clockElement.textContent = timeString;
    }

    // Perbarui jam setiap detik
    setInterval(updateClock, 1000);
    updateClock();
    */
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();

        // Daftar hari dan bulan dalam bahasa Indonesia
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const months = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        // Menambahkan offset WIB (+7 jam)
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const wibTime = new Date(utc + (3600000 * 7));

        // Mendapatkan komponen tanggal dan waktu
        const dayName = days[wibTime.getDay()];
        const day = String(wibTime.getDate()).padStart(2, '0');
        const month = months[wibTime.getMonth()];
        const year = wibTime.getFullYear();
        const hours = String(wibTime.getHours()).padStart(2, '0');
        const minutes = String(wibTime.getMinutes()).padStart(2, '0');
        const seconds = String(wibTime.getSeconds()).padStart(2, '0');

        // Format waktu lengkap dalam paragraf
        clockElement.innerHTML = `
            <p>${dayName} ${day} ${month} ${year}</p>
            <p>${hours}:${minutes}:${seconds} WIB</p>
        `;
    }

    // Perbarui jam setiap detik
    setInterval(updateClock, 1000);
    updateClock();

    var modal = document.getElementById("myModal");
    var menuIcon = document.getElementById("menuIcon");
    var span = document.getElementsByClassName("close")[0];
    menuIcon.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
