const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTt5KDxJ06RPGff_K3LC8va-AM9KmsCBESLtYgaQYTwm3KqQcr1QuzkLJ-0CrLlnWSpKr-TGLusnM7O/pub?gid=1116344509&single=true&output=csv'; // Replace with the URL of your published CSV file

export const fetchDataFromCSV = () => {
  return fetch(CSV_URL, {
    cache: 'no-store', // Set cache mode to 'no-store' to prevent caching
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(csvData => {
      // Process or use the fetched CSV data here
      console.log('CSV Data:', csvData);
      // Example: Parse CSV data (modify as per your requirement)
      const lines = csvData.split('\n');
      const headers = lines[0].split(',');
      const data = lines.slice(1).map(line => line.split(','));
      console.log('CSV Headers:', headers);
      console.log('CSV Rows:', data);
      return { headers, data };
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

