import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Assets/profile.png';
import styles from '../Styles/username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../Helper/Validate';



export default function Recovery() {
  

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}>

      </Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-4xl font-bold'>Recovery</h4>
            <span className='py-4 text-lg w-1/1 text-center text-gray-500'>
              Enter OTP to recover your password
            </span>
          </div>

          <form className='pt-20'>
            <div className='textbox flex flex-col items-center gap-6'>
            <div className="input text-center">
              <span className='py-4 text-sm text-left text-gray-500'>
                Enter 6 digit OTP sent to your email
              </span>
              <input  className={styles.textbox} type="text" placeholder='OTP' />
            </div>
              <button className={styles.btn} type='submit'>Sign in</button>
            </div>

            <div className="text-center py-4">
              <span className=' text-gray-500'>
                Can't get OTP? <button className=' text-red-500'>Resend</button>
              </span>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
