const btn = document.getElementById('getQuote');
const quoteEl = document.getElementById('quote');
const loading = document.getElementById('loading');
const errorEl = document.getElementById('error');

// Local fallback quotes (used when network fetch fails)
const fallbackQuotes = [
    { content: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { content: 'Code is like humor. When you have to explain it, it’s bad.', author: 'Cory House' },
    { content: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
    { content: 'Experience is the name everyone gives to their mistakes.', author: 'Oscar Wilde' }
];

async function fetchQuote() {
    loading.classList.remove('hidden');
    errorEl.textContent = '';
    quoteEl.textContent = '';
    try {
        // example of using AbortController for timeouts
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 7000);
        const res = await fetch('https://api.quotable.io/random', { signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        quoteEl.textContent = `"${data.content}" — ${data.author}`;
    } catch (err) {
        console.warn(err);
        // fallback simulated async result
        await new Promise(r => setTimeout(r, 600));
        const pick = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        quoteEl.textContent = `"${pick.content}" — ${pick.author}`;
        errorEl.textContent = 'Could not fetch remote quote; showing a local fallback.';
    } finally {
        loading.classList.add('hidden');
    }
}

btn.addEventListener('click', fetchQuote);
