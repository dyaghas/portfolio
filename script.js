function hover(element) {
    element.setAttribute('src', 'images/github-mark.svg');
  }
  
function unhover(element) {
  element.setAttribute('src', 'images/github-mark-white.svg');
}

function copyToClipboard() {
  navigator.clipboard.writeText("diamonddyaghas@gmail.com");
}

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = langData[key];
  });
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`./language/${lang}.json`);
  return response.json();
}

// Function to change language
async function changeLanguage(lang) {
  await setLanguagePreference(lang);
  
  const langData = await fetchLanguageData(lang);
  console.log(langData);
  updateContent(langData);
}

