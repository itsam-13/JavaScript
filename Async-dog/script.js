const status = document.getElementById('status');
const gallery = document.getElementById('gallery');
const fetchBtn = document.getElementById('fetchBtn');
const fetch3Btn = document.getElementById('fetch3Btn');

async function fetchDog() {
    try {
        status.textContent = 'Loading...';
        gallery.innerHTML = '';
        const resp = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'Random dog';
        gallery.appendChild(img);
        status.textContent = 'Loaded one dog.';
    } catch (err) {
        status.textContent = 'Error: ' + err.message;
    }
}

async function fetchDogUrl() {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!resp.ok) throw new Error(resp.statusText);
    const data = await resp.json();
    return data.message;
}

async function fetchThreeParallel() {
    try {
        status.textContent = 'Loading 3 dogs in parallel...';
        gallery.innerHTML = '';
        const promises = [fetchDogUrl(), fetchDogUrl(), fetchDogUrl()];
        const urls = await Promise.all(promises);
        urls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            gallery.appendChild(img);
        });
        status.textContent = 'Loaded 3 dogs (parallel).';
    } catch (err) {
        status.textContent = 'Error: ' + err.message;
    }
}

fetchBtn.addEventListener('click', fetchDog);
fetch3Btn.addEventListener('click', fetchThreeParallel);
