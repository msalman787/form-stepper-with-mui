import React from "react";

import { useFormik } from 'formik'
import * as Yup from 'yup'


function Form() {
    const formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        onSubmit:(val)=>{
           

        },
     
        onSubmit:(val)=>{
            console.log(val)
        },
        validationSchema: Yup.object({
            name:Yup.string().required("name Required"),
            password:Yup.string().min(5,"max be 20 character") .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
              ).required("this feild has Required"),
            email : Yup.string().email("invalid email")
        })

    })
    return (
        <>

            <h1>
                Form
            </h1>
            <form onSubmit={formik.handleSubmit}>


                <input type="text" id="name" onChange={formik.handleChange}
                    placeholder="Enter Name" maxLength={10} minLength={3} />

                    <br/>

                {
                    formik.errors.name ?
                        <div style={{ color: "red" }}>{formik.errors.name}</div>

                        :
                        <></>}


                <input type="email" id="email" onChange={formik.handleChange}
                    placeholder="Enter Eamil" maxLength={16} />

                    {
                    formik.errors.email ? 
                   <div style={{ color: "red" }}>{formik.errors.email}</div>
                   :
                   <></>    
                }

                <input type="text" id="password" onChange={formik.handleChange}
                    placeholder="Enter Password"  />

{
                    formik.errors.password ?
                        <div style={{ color: "red" }}>{formik.errors.password}</div>

                        :
                        <></>}

                <br />
                <input type="submit" />

            </form>
        </>
    )
}

export default Form