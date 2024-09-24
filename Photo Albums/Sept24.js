// function openAlbum(month) {
//   // Placeholder function to handle album opening
//   alert("Opening album for " + month);
//   // Here you can redirect to a new page or load the album content dynamically
// }


function openAlbum(month) {
  // Remove any previously loaded script
  const existingScript = document.getElementById('monthScript');
  if (existingScript) {
      existingScript.remove();
  }
  
  // Create a new script element for the selected month
  const script = document.createElement('script');
  script.src = month === 'September 2024' ? 'Sept24.js' :
                month === 'October 2024' ? 'Oct24.js' :
                month === 'November 2024' ? 'Nov24.js' :
                'Dec24.js'; // Adjust for other months
  script.id = 'monthScript';
  document.body.appendChild(script);
  
  alert("Opening album for " + month);
}
