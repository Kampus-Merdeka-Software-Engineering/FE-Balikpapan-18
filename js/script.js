// Fungsi untuk menampilkan formulir nomor resi
function showTrackingForm() {
    document.querySelector(".resi-form").style.display = "block";
}

// Fungsi untuk menyembunyikan formulir nomor resi
function hideTrackingForm() {
    document.querySelector(".resi-form").style.display = "none";
}

// Tambahkan event listener ke tautan "Service 1"
document.getElementById("service-1-link").addEventListener("click", function(e) {
    e.preventDefault();
    // Tampilkan formulir nomor resi saat tautan "Service 1" diklik
    showTrackingForm();
});

// Tambahkan event listener ke formulir nomor resi
document.getElementById("tracking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    // Ambil nomor resi yang diisi oleh pengguna
    var trackingNumber = document.getElementById("tracking-number").value;
    // Lakukan sesuatu dengan nomor resi (misalnya, kirim ke server atau proses lokal)
    alert("Tracking Number: " + trackingNumber);
    // Sembunyikan formulir nomor resi setelah selesai
    hideTrackingForm();
});
