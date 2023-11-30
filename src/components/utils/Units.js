import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';
import { measureToUnitsMap } from './ConvertionUtils';

const Units = ({measure, selectedUnit, setSelectedUnit}) => {

    const [units, setUnits] = useState([]);

    useEffect(() => {

        console.log({measure})

        // Update units dropdown options based on the selected measure
        const unitsForSelectedMeasure = Object.keys(measureToUnitsMap[measure]);
        setUnits(unitsForSelectedMeasure);

        setSelectedUnit(unitsForSelectedMeasure[0]); // Set the first unit as default

      }, [measure]);

      const handleUnitChange = (value) => {
        setSelectedUnit(value.target.value);
        // Perform any actions based on the selected unit if needed
      };
    

    return (
        <Radio.Group value={selectedUnit} size='large' buttonStyle="solid" onChange={handleUnitChange} style={{margin: 10}}>
            {units.map((item, index) => (
                <Radio.Button key={index} value={item}>{item}</Radio.Button>
            ))}
            <Radio.Button value="Weight">Weight</Radio.Button>
            {/* <Radio.Button value="Time">Time</Radio.Button>
            <Radio.Button value="Temperature">Temperature</Radio.Button>
            <Radio.Button value="Current">Current</Radio.Button> */}
        </Radio.Group>)
}

export default Units;