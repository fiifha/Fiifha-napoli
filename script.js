function search() {
    const query = document.getElementById('searchInput').value;
    fetch(`/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${item.title}</strong><br>${item.description}<br><a href="${item.url}" target="_blank">${item.url}</a>`;
                results.appendChild(li);
            });
        });
}
