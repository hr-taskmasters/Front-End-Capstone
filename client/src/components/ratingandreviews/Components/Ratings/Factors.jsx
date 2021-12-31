import React, { useState, useEffect} from 'react';
import { Card, Form, Stack} from 'react-bootstrap'


function Factors (props) {

  const chars = props.metaData.characteristics;  
  




  return (
    <Card>
      <Card.Body> 
        {chars &&
        <Stack >
          <b>Comfort</b>
          <Form.Range disabled={true} defaultValue={(chars.Comfort.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Uncomfortable</div>
            <div className="mx-auto">Ok</div>
            <div className="ms-auto">Perfect</div>
          </Stack>
          <b>Fit</b>
          <Form.Range disabled={true} defaultValue={(chars.Fit.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Runs tight</div>
            <div className="mx-auto">Perfect</div>
            <div className="ms-auto">Runs long</div>
          </Stack>
          <b>Length</b>
          <Form.Range disabled={true} defaultValue={(chars.Length.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Runs short</div>
            <div className="mx-auto">Perfect</div>
            <div className="ms-auto">Runs long</div>
          </Stack>
          {/* <b>Width</b>
          <Form.Range disabled={true} defaultValue={(chars.Width.value / 5) * 100}/> */}
          <b>Quality</b>
          <Form.Range disabled={true} defaultValue={(chars.Quality.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Poor</div>
            <div className="mx-auto">What I Expected</div>
            <div className="ms-auto">Perfect</div>
          </Stack>
        </Stack>





        }
        
      </Card.Body>
    </Card>
  )

  // return (
  //   <Card>
  //     <Card.Body> 
  //       <p>Size</p>
  //       <p>Too small--Perfect--Too large</p>
  //       <p>comfort</p>
  //       <p></p>
  //       <p>Poor----Perfect</p>
  //     </Card.Body>
  //   </Card>
  // )

}
export default Factors;



// {props.characteristics.Comfort.value}

{/* <p>Size</p>
    <p>Too small--Perfect--Too large</p>
    <p>comfort</p>
    <p></p>
    <p>Poor----Perfect</p> */}



  // const chars = props.characteristics;
  // const renderFactors = () => {
  //   return (
  //     <div>
  //     {if (chars.Comfort)
  //       <div>
  //         {chars.Comfort.value}
  //       </div>
  //     } else if ()
  //     }
  //     </div>
  //   )
  // }