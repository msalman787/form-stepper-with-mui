import React from "react";
import {TextField , Button , Container , Box , Paper , Typography ,InputLabel ,Select ,MenuItem ,FormControl} from "@mui/material"
import { useFormik } from 'formik'
import * as Yup from 'yup'




function Form(props) {

 

    console.log(props.handleNext)
    const formik = useFormik({
        initialValues: { name: "", last_name: "", Father_name: "" , email:"" , phone:"" },
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
        
            name:Yup.string().required("Required Name"),
            last_name:Yup.string().required("Required Last Name"),
            Father_name:Yup.string().required("Required Father Name "),
            email:Yup.string().required("Required Email "),
            phone:Yup.string().required("Required Phone No "),
        })

    })
    return (
        <FormControl fullWidth>
        <Container mt={5}>
            <Paper  elevation={4} pt={5} >
                <Box className="my-3" boxShadow={2} p={5}>
                <Typography variant="h5">
                    Personal Information
                </Typography>
                <form onSubmit={formik.handleSubmit}>


                    <TextField 
                     id="name"
                     label="First Name"
                     variant="outlined"
                     placeholder="Enter Your First Name"
                     fullWidth
                     margin="normal"
                    onChange={formik.handleChange}
 
                    /><br/>


                    {
                        formik.errors.name ?
                            <div style={{ color: "red" }}>{formik.errors.name}</div>

                            :
                            <></>}


                    <TextField 
                    id="last_name"
                    label="Last Name"
                    variant="outlined"
                    placeholder="Enter Your Last Name"
                    fullWidth
                    margin="normal"
                    onChange={formik.handleChange}
                    />

                        {
                        formik.errors.last_name ? 
                    <div style={{ color: "red" }}>{formik.errors.last_name}</div>
                    :
                    <></>    
                    }

                    <TextField  
                    id="Father_name"
                    label="Father Name"
                    variant="outlined"
                    placeholder="Enter Your Father Name"
                    fullWidth
                    margin="normal"
                    onChange={formik.handleChange}
                    />

                      {
                        formik.errors.Father_name ?
                            <div style={{ color: "red" }}>{formik.errors.Father_name}</div>

                            :
                            <></>}



                    <TextField  
                    id="email"
                    label="Email"
                    variant="outlined"
                    placeholder="Enter Your Email"
                    fullWidth
                    margin="normal"
                    onChange={formik.handleChange}
                    />

                      {
                        formik.errors.email ?
                            <div style={{ color: "red" }}>{formik.errors.email}</div>

                            :
                            <></>}



                    <TextField  
                    id="phone"
                    label="Phone No"
                    variant="outlined"
                    placeholder="Enter Your Phone NoFather Name"
                    fullWidth
                    margin="normal"
                    onChange={formik.handleChange}
                    />

                      {
                        formik.errors.phone ?
                            <div style={{ color: "red" }}>{formik.errors.phone}</div>

                            :
                            <></>}
                    
                        
                    <br />
                    <Button type="submit" size="medium" variant="outlined">Next</Button>


                </form>
                </Box>
            </Paper>

        </Container>
        </FormControl>
    )
}

export default Form