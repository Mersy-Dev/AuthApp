import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Assets/profile.png';
import styles from '../Styles/username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../Helper/Validate';
import convertToBase64 from '../Helper/Convert';



export default function Register() {

  const [file, setFile] = useState();


  const formik = useFormik({
    initialValues: {
      username: 'mercy',
      email: 'mercy@gmail.com',
      password: 'mercy@11',
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {profile: file || ''});

      console.log(values);
    }
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}>

      </Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} styles={{width: "45%"}}>
          <div className="title flex flex-col items-center">
            <h4 className='text-4xl font-bold'>Register</h4>
            <span className='py-4 text-lg w-1/1 text-center text-gray-500'>
              Happy to join you!
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-3">
              <label htmlFor="profile">
                <img src={file || avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" name="profile" id="profile" />
            </div>

            <div className="textbox flex flex-col items-center gap-6 ">
            <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
            <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Email*' />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password*' />
              <button className={styles.btn} type='submit'>Register</button>
            </div>

            <div className="text-center py-4">
              <span className=' text-gray-500'>
                Already Register? <Link className=' text-red-500' to="/login">Login Now</Link>
              </span>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
