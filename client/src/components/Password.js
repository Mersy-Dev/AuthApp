import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Assets/profile.png';
import styles from '../Styles/username.module.css';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {passwordValidate} from '../Helper/Validate';



export default function Password() {
  const formik = useFormik({
    initialValues: {
      password: 'mercy@11',
    },
    validate: passwordValidate,
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
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-4xl font-bold'>Hello Again!</h4>
            <span className='py-4 text-lg w-1/1 text-center text-gray-500'>
              Eplore More by Connecting with us
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-3">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6 ">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
              <button className={styles.btn} type='submit'>Sign in</button>
            </div>

            <div className="text-center py-4">
              <span className=' text-gray-500'>
                Forgot Password? <Link className=' text-red-500' to="/recovery">Recover Now</Link>
              </span>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
