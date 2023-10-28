import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Assets/profile.png';
import styles from '../Styles/username.module.css';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {resetPasswordValidation} from '../Helper/Validate';



export default function Reset() {
  const formik = useFormik({
    initialValues: {
        password: 'mercy@11',
        confirm_pwd: 'mercy@11'
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    }
   });

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}>

      </Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{width : "50%"}}>
          <div className="title flex flex-col items-center">
            <h4 className='text-4xl font-bold'>Reset</h4>
            <span className='py-4 text-lg w-1/1 text-center text-gray-500'>
              Enter new password
            </span>
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6 ">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='New Password' />
              <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="password" placeholder='Repeat Password' />
              <button className={styles.btn} type='submit'>Sign in</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
