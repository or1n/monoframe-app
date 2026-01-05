(function(){
  try {
    var savedTheme = localStorage.getItem('mono-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = (savedTheme === 'true') || (savedTheme === null && prefersDark);
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {
    // ignore
  }
})();
