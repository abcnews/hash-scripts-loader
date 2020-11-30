// Function to load script into page
export const attach = (url: string) => {
  const scriptTag = document.createElement('script');
  if (url.includes('index_modern.js')) scriptTag.setAttribute('type', 'module');
  scriptTag.setAttribute('src', url);
  document.head.appendChild(scriptTag);
};
