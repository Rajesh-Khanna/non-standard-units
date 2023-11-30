export const rowProcessing = (data) => {


    var measureConvertions = Object.groupBy(data.map( row => [Number(row[3]), row[2], row[1]] ), row => row[2]);

     return sortSubarraysByFirstValue(measureConvertions) ;

}


function sortSubarraysByFirstValue(mapObj) {
    const sortedMap = new Map();
  
    for (const [key, arr] of Object.entries(mapObj)) {
      const sortedArr = [...arr].sort((a, b) => a[0] - b[0]);
      sortedMap.set(key, sortedArr);
    }
  
    return sortedMap;
  }
  