import React, { useState } from 'react';
import Units from './utils/Units';

import { Card, Button, Input, Select } from 'antd';
const { Option } = Select;

const Search = ({convertionState}) => {

    const [measureOption, setMeasureOption] = useState('Length');
    const [results, setResults] = useState([]);
    const [selectedUnit, setSelectedUnit] = useState('');

    const { Option } = Select;

    const handleMeasureChange = (event) => {
        console.log({"value": event})
        setMeasureOption(event);
      };

    const measure = (
        <Select defaultValue="Length" onChange={handleMeasureChange}>
          <Option value="Length">Length</Option>
          <Option value="Weight">Weight</Option>
          {/* <Option value="Time">Time</Option>
          <Option value="Temperature">Temperature</Option>
          <Option value="Current">Current</Option> */}
        </Select>
      );

    const handleFind = () => {

        setResults([selectedUnit, selectedUnit, selectedUnit]);

    }

    return (<>
        <div>
            <Input addonBefore={measure} addonAfter={<Units measure={measureOption} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit}/>} defaultValue="mysite" size="large" />
            <Button size='large' type="primary" onClick={handleFind}>Find</Button>
        </div>
        <div>
        <Card title="Card title" style={{ width: 300, margin: 50, textAlign: 'left' }}>
            {
                results.map((value, index) => (
                    <p key={index}>{index}: {value}</p>
                ))
            }
        </Card>
        </div>
    </>);
}

export default Search;