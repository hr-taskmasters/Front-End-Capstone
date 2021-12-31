import React, { useState, useEffect} from 'react';
import { Card, Form, Stack} from 'react-bootstrap'


function Factors (props) {
  const chars = props.metaData.characteristics;  
  
  return (
    <Card>
      <Card.Body> 
        {chars ?
        <div>
          {chars.Comfort &&
          <div>
          <b>Comfort</b>
          <Form.Range disabled={true} defaultValue={(chars.Comfort.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Uncomfortable</div>
            <div className="mx-auto">Ok</div>
            <div className="ms-auto">Perfect</div>
          </Stack>
          </div>
          }
          {chars.Fit &&
          <div>
          <b>Fit</b>
          <Form.Range disabled={true} defaultValue={(chars.Fit.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Runs tight</div>
            <div className="mx-auto">Perfect</div>
            <div className="ms-auto">Runs long</div>
          </Stack>
          </div>
          }
          {chars.Length &&
          <div>
          <b>Length</b>
          <Form.Range disabled={true} defaultValue={(chars.Length.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Runs short</div>
            <div className="mx-auto">Perfect</div>
            <div className="ms-auto">Runs long</div>
          </Stack>
          </div>
          }
          {chars.Width &&
          <div>
          <b>Width</b>
          <Form.Range disabled={true} defaultValue={(chars.Width.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Too narrow</div>
            <div className="mx-auto">Perfect</div>
            <div className="ms-auto">Too wide</div>
          </Stack> 
          </div>
          }
          {chars.Quality &&
          <div>
          <b>Quality</b>
          <Form.Range disabled={true} defaultValue={(chars.Quality.value / 5) * 100}/>
          <Stack direction="horizontal" gap={3} className="factors-text">
            <div>Poor</div>
            <div className="mx-auto">What I Expected</div>
            <div className="ms-auto">Perfect</div>
          </Stack>
          </div>
          }
        </div>
         : 
         <div className="spinner-border" role="status">
             <span className="visually-hidden">Loading...</span>
         </div>
        }
      </Card.Body>
    </Card>
  )
}
export default Factors;