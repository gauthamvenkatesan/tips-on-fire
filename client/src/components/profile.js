/// <reference path="../typings/react-vis.d.ts"/> 
import React,{useEffect} from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import {XYPlot, FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries, VerticalBarSeries, LabelSeries} from 'react-vis';
import PropTypes from 'prop-types'


function Profile ({KeysErrorPecentage_data, profileRequest})  {

  const labelData = KeysErrorPecentage_data.map((key, index) => ({    
    x: key.x,
    y: KeysErrorPecentage_data[index].y
  }));

  const axisStyle = {
    ticks: {
      fontSize: '14px',
      color: '#333'
    },
    title: {
      fontSize: '16px',
      color: '#333'
    }
  };

  
  return (
    <Container className="p-5">
      <Alert variant="success"> Genie has gathered vital information after the smoke cleared from your typing session </Alert>
      <h5>Show me the keys typed accurately</h5>
      <hr/>      
      <FlexibleWidthXYPlot xType="ordinal" height={200} yDomain={[0,100]} xDistance={100}>
          <HorizontalGridLines />
          <XAxis />
          <YAxis />          
          <VerticalBarSeries animation className="vertical-bar-series-example" data={KeysErrorPecentage_data} />
          <LabelSeries data={labelData} getLabel={d => d.x} />
      </FlexibleWidthXYPlot>
      {/*<h5>Key typing speed</h5>
      <hr/>
       <XYPlot width={450} height={200}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries animation data={KeysErrorPecentage_data} />
      </XYPlot> */}
    </Container>
  )
}
Profile.propTypes = {
  KeysErrorPecentage_data: PropTypes.array.isRequired
}

export default Profile
