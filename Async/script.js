const btn = document.getElementById('getQuote');
const quoteEl = document.getElementById('quote');
const loading = document.getElementById('loading');
const errorEl = document.getElementById('error');

async function fetchQuote(){
  loading.classList.remove('hidden');
  errorEl.textContent = '';
  quoteEl.textContent = '';
  try{
    // example of using AbortController for timeouts
    const controller = new AbortController();
    const timeout = setTimeout(()=> controller.abort(), 7000);
    const res = await fetch('https://api.quotable.io/random', {signal: controller.signal});
    clearTimeout(timeout);
    if(!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    quoteEl.textContent = `"${data.content}" — ${data.author}`;
  }catch(err){
    console.warn(err);
    // fallback simulated async result
    await new Promise(r => setTimeout(r, 600));
    quoteEl.textContent = '"This is a simulated offline quote." — Dev';
    errorEl.textContent = 'Could not fetch remote quote; showing fallback.';
  }finally{
    loading.classList.add('hidden');
  }
}

btn.addEventListener('click', fetchQuote);
