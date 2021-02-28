/// <reference path="../typings/react-vis.d.ts"/> 
import React,{useEffect} from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import {FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries, VerticalBarSeries, LabelSeries} from 'react-vis';

function Profile ({KeysErrorPecentage_data, profileRequest})  {

  useEffect( () => profileRequest() ,[KeysErrorPecentage_data])

  const labelData = KeysErrorPecentage_data.map((d, idx) => ({
    x: d.x,
    y: KeysErrorPecentage_data[idx].y
  }));

  
  return (
    <Container className="p-5">
      <Alert variant="success"> Genie has gathered vital information after the smoke cleared from your typing session </Alert>
      <h5>Show me the keys typed accurately</h5>
      <hr/>      
      <FlexibleWidthXYPlot xType="ordinal" height={200} className="" yDomain={[0,100]} xDistance={100}>
          <HorizontalGridLines />
          <XAxis />
          <YAxis />          
          <VerticalBarSeries animation className="vertical-bar-series-example" data={KeysErrorPecentage_data} />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </FlexibleWidthXYPlot>
    </Container>
  )
}

export default Profile
