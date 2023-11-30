import React, { useState } from 'react';
import Units from './utils/Units';
import { getStandardValues, getBestNConvertions } from './utils/ConvertionUtils';

import { Radio, List, Card, Button, InputNumber, Layout } from 'antd';
const { Header, Content, Footer } = Layout;
const Search = ({convertionState}) => {

    const [measureOption, setMeasureOption] = useState('Length');
    const [results, setResults] = useState([]);
    const [selectedUnit, setSelectedUnit] = useState('');
    const [measureValue, setMeasureValue] = useState(0);


    const handleMeasureChange = (event) => {
        console.log({"value": event})
        setMeasureOption(event.target.value);
      };

    const measure = (
        <Radio.Group defaultValue="Length" size='large' value={measureOption} buttonStyle="solid" onChange={handleMeasureChange} style={{margin: 10}}>
            <Radio.Button value="Length">Length</Radio.Button>
            <Radio.Button value="Weight">Weight</Radio.Button>
            {/* <Radio.Button value="Time">Time</Radio.Button>
            <Radio.Button value="Temperature">Temperature</Radio.Button>
            <Radio.Button value="Current">Current</Radio.Button> */}
        </Radio.Group>
      );

    const handleFind = () => {

        const standardValue = getStandardValues(measureOption, measureValue, selectedUnit);

        const bestConvertions = getBestNConvertions(measureOption, standardValue, convertionState);

        setResults(bestConvertions);

    }

    return (<>
        <Content>
            { measure } <br />
            <InputNumber onChange={setMeasureValue} value={measureValue} size="large" style={{width: "100%", textAlign:"center" }} /> <br/>
            <Units measure={measureOption} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit}/> <br/>
            <Button size='large' type="primary" onClick={handleFind}>Find</Button>
            <Card title="Results" style={{  margin: 50, textAlign: 'left' }}>

                <List
                    size="small"
                    dataSource={results}
                    renderItem={(value) =>                     
                        {
                                var multiple = Number((value[0] < 1 ? 1/value[0] : value[0]).toPrecision(3));
                                
                                var result = value[0] >= 1? "1/" + multiple + " of " + value[1] : multiple + " times " + value[1];    
                                
                                return (<List.Item> {result}</List.Item>)
                            }}
                />

            </Card>
        </Content>
    </>);
}

export default Search;