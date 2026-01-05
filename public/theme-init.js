(function(){
  try {
    var savedTheme = localStorage.getItem('mono-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = (savedTheme === 'true') || (savedTheme === null && prefersDark);
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    // apply persisted color theme (data attribute used by CSS)
    var savedColor = localStorage.getItem('mono-color') || 'default';
    document.documentElement.setAttribute('data-color-theme', savedColor);
  } catch {
    // ignore
  }
})();
