import React from 'react'
import {useFormik} from 'formik'

function Form() {

  const formik = useFormik({
    initialValues : {name:"",email:"",password:""},
    validate : (val)=>{
      let err = {}

        if(!val.name){
          err.name="Enter Name"
        }
        else if(!val.email){
          err.email="Enter Email"
        }
        else if(!val.password){
          err.email="Enter Password"
        }
        else if((!/^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{1,}$/.test(val.password))){
            err.password="Enter any Capital Letter"

        }
        else if((!/^(?=.*[a-z])[A-Za-z\d@$!%*?&]{1,}$/.test(val.password))){
          err.password="Enter any Small Letter"

        }
        else if((!/^(?=.*\d)[A-Za-z\d@$!%*?&]{1,}$/.test(val.password))){
          err.password="Enter any number Letter"

      }
        return err
    },
    onSubmit:(val)=>{
      console.log(val)
    }
  })

  return (
    <>
    <h1>Form </h1>
        <form onSubmit={formik.handleSubmit}>
          <label>Name</label>
            <input type="text" id='name' value={formik.values.name} onChange={formik.handleChange}  
              placeholder="Enter text" maxLength={10} minLength={3}/> <br/>

                {formik.errors.name ? 
                <div style={{color : "red"}}>{formik.errors.name}</div>:<></>
                } 

            

                <label>password</label>
              <input type="password" id='password' value={formik.values.password} onChange={formik.handleChange}
              placeholder="Enter password" maxLength={8} /> <br/>
              
                {formik.errors.password ? <div style={{color : "red"}}>{formik.errors.password}</div>:<></>} <br/>

            <button type='submit'> Submit </button>
        </form>
    </>
  )
}

export default Form