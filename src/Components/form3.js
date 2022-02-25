import React from "react";
import {TextField , Button , Container , Box , Paper , Typography ,InputLabel ,Select ,MenuItem ,FormControl ,ListSubheader} from "@mui/material"
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Form_3(props) {



        console.log(props.handleNext)
        const formik = useFormik({
            initialValues: { CU_name: "" , passout_date:""},
            onSubmit:(val)=>{
    
            },
            onSubmit:(val)=>{
                console.log(val)
                setTimeout(()=>{
                console.log(val)
                props.handleNext()
                }
                ,400)
    
            },
        validationSchema: Yup.object({
            smit:Yup.string().required("Required  "),
            // grade:Yup.string().required("Required Grade")
        
           
        })

    })
    return (
        <>
        <Container mt={5}>
            <Paper  elevation={4} pt={5} >
                <Box className="my-3" boxShadow={2} p={5}>
                <Typography variant="h5" >
               Course Trade
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    

                <FormControl fullWidth  className="my-3" >
                    <InputLabel  htmlFor="grouped-select">Course</InputLabel>
                    <Select defaultValue="" id="course"  label="Course">
                    
                    
                    <MenuItem value={1}>Artificial Intelligence</MenuItem>
                    <MenuItem value={2}>C.C.O</MenuItem>
                    <MenuItem value={3}>C.C.N.A</MenuItem>
                    <MenuItem value={4}>Web And Mobile App</MenuItem>
                    <MenuItem value={5}>GRaphic Designing</MenuItem>
                    <MenuItem value={6}>Phython</MenuItem>
                    </Select>
                </FormControl>
                

                    <TextField 
                     id="smit"
                     className="my-3"
                     label="Center"
                     variant="outlined"
                     placeholder="Enter SMIT Ful Form"
                     fullWidth
                     margin="normal"
                    onChange={formik.handleChange}
 
                    />


                    {
                        formik.errors.smit ?
                            <div style={{ color: "red" }}>{formik.errors.smit}</div>

                            :
                            <></>}


                <FormControl fullWidth className="my-1" >
                    <InputLabel  htmlFor="grouped-select">Batch</InputLabel>
                    <Select defaultValue="" id="Batch"  label="Batch">
                    
                    
                    <MenuItem value={1}>BAtch - 1</MenuItem>
                    <MenuItem value={2}>BAtch - 2</MenuItem>
                    <MenuItem value={3}>BAtch - 3</MenuItem>
                    </Select>
                </FormControl>

                

            

    

                    
                    <Button type="submit" className="my-3" size="medium" variant="outlined">Submit</Button>
                    <Button type="reset" className="mx-2" size="medium" variant="outlined" onClick={()=>props.Reset()}>Back</Button>


                </form>
                </Box>
            </Paper>

        </Container>
        </>
    )
}

export default Form_3;
