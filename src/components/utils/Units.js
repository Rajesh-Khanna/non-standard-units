import React, { useState, useEffect } from 'react';

import { Card, Button, Input, Select } from 'antd';
const { Option } = Select;

const Units = ({measure, selectedUnit, setSelectedUnit}) => {

    const lengthUnits = {
        meter: 1,
        km: 1000,
        feet: 1,
        inches: 1,
        cm: 1,
        "yd": 1,
        "mi": 1,
        nanometer: 1,
        picometer: 1,
        "Astronomical Unit (AU)": 1,
        "light-year": 1
    }

    const massUnits = {
        gram: 1,
        kilograms: 1,
        pound: 1,
        Tonne: 1,
        Ounce: 1,
        Carat: 1,
        "Atomic Mass Unit": 1
    }

    const measureToUnitsMap = {
        Length: lengthUnits,
        Weight: massUnits
    };

    const [units, setUnits] = useState([]);

    useEffect(() => {

        console.log({measure})

        // Update units dropdown options based on the selected measure
        const unitsForSelectedMeasure = Object.keys(measureToUnitsMap[measure]);
        setUnits(unitsForSelectedMeasure);

        setSelectedUnit(unitsForSelectedMeasure[0]); // Set the first unit as default

      }, [measure]);

      const handleUnitChange = (value) => {
        setSelectedUnit(value);
        // Perform any actions based on the selected unit if needed
      };
    

    return (
    <Select value={selectedUnit} onChange={handleUnitChange}>
        {units.map((item, index) => (
            <Option key={index} value={item}>
                {item}
            </Option>
        ))}
    </Select>);
}

export default Units;