// Function to load script into page
export const attach = (url: string) => {
  const scriptTag = document.createElement('script');

  // Adds support for addModernJS:true in @abcnews/aunty
  // Here we assume a few things
  if (url.includes('index_modern.js')) {
    scriptTag.setAttribute('type', 'module');

    const noModuleTag = document.createElement('script');
    noModuleTag.setAttribute('nomodule', '');

    const baseUrl = url.replace('index_modern.js', '');
    noModuleTag.setAttribute('src', `${baseUrl}index.js`);
    document.head.appendChild(noModuleTag);
  }

  scriptTag.setAttribute('src', url);
  document.head.appendChild(scriptTag);
};
