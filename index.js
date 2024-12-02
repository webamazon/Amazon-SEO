function generateKeywords() {
    const input = document.getElementById('keyword-input').value;
    const resultsDiv = document.getElementById('keyword-results');

    if (!input.trim()) {
        resultsDiv.innerHTML = 'Please enter a keyword.';
        return;
    }

    resultsDiv.innerHTML = `Here are keywords based on "${input}":<br>- ${input} tips<br>- ${input} guide<br>- Best ${input} tools<br>- ${input} for beginners`;
}

function generateMetaTags() {
    const title = document.getElementById('meta-title').value;
    const description = document.getElementById('meta-description').value;
    const resultsDiv = document.getElementById('meta-results');

    if (!title || !description) {
        resultsDiv.innerHTML = 'Please enter both title and description.';
        return;
    }

    resultsDiv.innerHTML = `
        <p><strong>Meta Title:</strong> ${title}</p>
        <p><strong>Meta Description:</strong> ${description}</p>
    `;
}
