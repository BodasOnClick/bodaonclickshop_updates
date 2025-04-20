async function loadLanguage(lang) {
    const res = await fetch(`./locales/${lang}.json`);
    const translations = await res.json();
  
    document.documentElement.lang = lang;
  
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.tagName === "OPTION") {
          el.placeholder = translations[key];
          el.textContent = translations[key];
        } else {
          el.innerHTML = translations[key]; // usa innerHTML si hay etiquetas como <strong>
        }
      }
    });
  }