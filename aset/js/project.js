function showFullscreenPopup(id) {
    const popup = document.getElementById(`popup-${id}`);
    if (popup) {
        popup.style.display = 'flex'; // Menampilkan popup yang sesuai
    }
}

function closeFullscreenPopup(id) {
    const popup = document.getElementById(`popup-${id}`);
    if (popup) {
        popup.style.display = 'none'; // Menyembunyikan popup yang sesuai
    }
}

function copyCode(elementId) {
    const codeBox = document.getElementById(elementId);
    codeBox.select();
    document.execCommand('copy');
    alert('Source code telah disalin!');
}

function scrollContainer(direction) {
    const container = document.getElementById('scroll-container');
    const scrollAmount = direction * container.clientWidth; // Adjust for full-width scrolling
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}