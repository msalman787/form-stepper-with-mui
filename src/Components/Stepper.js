import React, { useState } from "react";
import Form from './Form'
import Form2 from './form2'
import Form3 from './form3'


import { Stepper, Step, StepLabel, Typography } from "@mui/material";

function getStepContext(stepIndex,handleNext,Reset){
    switch(stepIndex){
        case 0:
            return <Form handleNext={handleNext} Reset={Reset} />
    
        case 1:
            
            return <Form2 handleNext={handleNext} Reset={Reset} />

        case 2:
            return <Form3 handleNext={handleNext} Reset={Reset}/>

    }
}


function StepperForm() {

    const [activestep, setActiveStep] = useState(0)

    const steps = ["Personal information","Educational Information","Course Trade"];

    const handleNext=()=>{
        console.log("Clicking ")
        setActiveStep(activestep+1)
    }
    const Back=()=>{
        setActiveStep(activestep-1)
    }



    return (
        <>
            <div className='container my-7'>
                <Stepper  activeStep={activestep} alternativeLabel>
                    {steps.map((v) => (
                        <Step key={v}>
                            <StepLabel>{v}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {activestep == steps.length 
                ?  (
                    <Typography variant="h3" className="my-5 text-dark fw-bold" align="center">
                      Thank You
                    </Typography>
                  )
                : 
                <div>{getStepContext(activestep,handleNext,Back)}</div> 
                
                }
            </div>
        </>
    )
}

export default StepperForm