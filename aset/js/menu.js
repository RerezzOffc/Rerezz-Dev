function toggleSidebar() {
            document.getElementById("sidebar").classList.toggle("open");
        }

        function updateClock() {
            const clockElement = document.getElementById('clock');
            const now = new Date();

            const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const wibTime = new Date(utc + (3600000 * 7));

            const dayName = days[wibTime.getDay()];
            const day = String(wibTime.getDate()).padStart(2, '0');
            const month = months[wibTime.getMonth()];
            const year = wibTime.getFullYear();
            const hours = String(wibTime.getHours()).padStart(2, '0');
            const minutes = String(wibTime.getMinutes()).padStart(2, '0');
            const seconds = String(wibTime.getSeconds()).padStart(2, '0');

            clockElement.innerHTML = `<p>${dayName} ${day} ${month} ${year}</p><p>${hours}:${minutes}:${seconds} WIB</p>`;
        }

        setInterval(updateClock, 1000);
        updateClock();
