import React from "react";
import {TextField , Button , Container , Box , Paper , Typography ,InputLabel ,Select ,MenuItem ,FormControl ,ListSubheader} from "@mui/material"
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Form({handleNext,Reset}) {


    const formik = useFormik({
        initialValues: { CU_name: ""},
        onSubmit:(val)=>{
           

        },
        onSubmit:(val)=>{
            console.log(val)
        },
        validationSchema: Yup.object({
            education:Yup.string().required("Required education "),
            CU_name:Yup.string().required("Required Collage / University  "),
            grade:Yup.string().required("Required Grade"),
            passout_date:Yup.string().required("Required Passout Date"),
        
           
        })

    })
    return (
        <>
        <Container mt={5}>
            <Paper  elevation={4} pt={5} >
                <Box boxShadow={2} p={5}>
                <Typography variant="h5" >
                Educational Information
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    

                <FormControl fullWidth  className="my-3" >
                    <InputLabel  htmlFor="grouped-select">Education</InputLabel>
                    <Select defaultValue="" id="education"  label="Education">
                    
                    
                    <MenuItem value={1}>Middle</MenuItem>
                    <MenuItem value={2}>Matric</MenuItem>
                    <MenuItem value={3}>Intermidiate</MenuItem>
                    <MenuItem value={4}>Bachelor</MenuItem>
                    <MenuItem value={5}>Masters</MenuItem>
                    <MenuItem value={6}>M.Phil / MS</MenuItem>
                    </Select>
                </FormControl>
                

                    <TextField 
                     id="CU_name"
                     label="Collage / University"
                     variant="outlined"
                     placeholder="Collage / University"
                     fullWidth
                     margin="normal"
                    onChange={formik.handleChange}
 
                    />


                    {
                        formik.errors.CU_name ?
                            <div style={{ color: "red" }}>{formik.errors.CU_name}</div>

                            :
                            <></>}

                <FormControl fullWidth >
                    <InputLabel  htmlFor="grouped-select">Grade</InputLabel>
                    <Select defaultValue="" id="grade"  label="Grade">
                    
                    
                    <MenuItem value={1}>A1</MenuItem>
                    <MenuItem value={2}>A</MenuItem>
                    <MenuItem value={3}>B</MenuItem>
                    <MenuItem value={4}>C</MenuItem>
                    </Select>
                </FormControl>

                

                    <TextField 
                    id="passout_date"
                    type="number"
                    label="Passout Date"
                    variant="outlined"
                    placeholder="Passout Date"
                    fullWidth
                    margin="normal"
                    onChange={formik.handleChange}
                    />

                        {
                        formik.errors.passout_date ? 
                    <div style={{ color: "red" }}>{formik.errors.passout_date}</div>
                    :
                    <></>  }

    

                    
                    <Button type="submit" size="medium" variant="outlined">Submit</Button>
                    {/* <Button type="reset" className="mx-2" size="medium" variant="outlined" onClick={()=>Reset()}>Back</Button> */}


                </form>
                </Box>
            </Paper>

        </Container>
        </>
    )
}

export default Form
//