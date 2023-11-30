
export const lengthUnits = {
    meter: 1,
    km: 1000,
    feet: 0.3048,
    inches: 0.0254,
    cm: 0.01,
    "yards": 0.9144,
    "miles": 1609.34,
    nanometer: 0.0000000001,
    picometer: 0.0000000000001,
    "Astronomical Unit (AU)": 0.00000000001,
    "light-year": 9461000000000000
}

export const massUnits = {
    gram: 1,
    kilograms: 1000,
    pound: 453.592,
    Tonne: 907184.74,
    Ounce: 28.35,
    Carat: 0.2,
    "Atomic Mass Unit": 1.661E-24
}

export const measureToUnitsMap = {
    Length: lengthUnits,
    Weight: massUnits
};



export const getStandardValues = (measure, measureValue, unitOfMeasure) => {
    console.log({measure, measureValue, unitOfMeasure});
    return measureToUnitsMap[measure][unitOfMeasure] * measureValue;
}

export const getBestNConvertions = (measure, standardValue, convertionState) => {
    console.log({measure, standardValue, convertionState});
    const references = convertionState.get(measure);

    if(references.length == 0){
        return [];
    }

    console.log({references});

    var greatestSmallerNumberIndex = 0;
    var nextIndex = -1;

    var normalizedArray = [];
    for(var [i, val] of references.entries()){
        if(val[0] < standardValue){
            greatestSmallerNumberIndex = i;
        } else if(nextIndex === -1) {
            nextIndex = i;
        }

        console.log({val});
        normalizedArray.push([Number(val[0])/standardValue, val[1]]);
    }

    greatestSmallerNumberIndex = Math.max(greatestSmallerNumberIndex-4, 0);
    var lastIndex = Math.min(references.length, nextIndex + 5);

    var finalList = normalizedArray.slice(greatestSmallerNumberIndex, lastIndex);

    console.log(finalList);
    return finalList;
} 