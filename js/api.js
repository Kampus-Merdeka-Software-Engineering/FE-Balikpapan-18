const API_BASE_URL = 'https://be-balikpapan-18-production.up.railway.app/api';

// async function fetchResi() {
//     try {
//         const response = await fetch(`${API_BASE_URL}/resi`);
//         const data = await response.json();
//         const resiList = document.getElementById('resi-list');
//         resiList.innerHTML = '';

//         data.forEach((resi) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = `${resi.name} by ${resi.no_resi}`;
//             resiList.appendChild(listItem);
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }

async function addNewContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        if (response.ok) {
            alert('Berhasil membuat kontak');
            location.reload();
        } else {
            alert('Gagal menambahkan data');
        }
    } catch (error) {
        alert('Gagal menambahkan data');
        console.error('Error adding contact:', error);
    }
}

async function fetchResiById() {
    const resiId = document.getElementById('tracking-resi').value;
    console.log(resiId);
    try {
        const response = await fetch(`${API_BASE_URL}/resi/${resiId}`);
        const resi = await response.json();
        const resiDetails = document.getElementById('resi-details');
        resiDetails.innerHTML = `
        No Resi: ${resi.data.no_resi}<br>
        nama barang: ${resi.data.nama_barang}<br>
        Tujuan : ${resi.data.destination}<br>
        Berat : ${resi.data.weight} Kg <br>
        `;
    } catch (error) {
        console.error('Error fetching resi:', error);
    }
}

// fetchResi();
// fetchResiById();
