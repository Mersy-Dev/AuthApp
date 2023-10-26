import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Assets/profile.png';
import styles from '../Styles/username.module.css'



export default function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-4xl font-bold'>Hello Again!</h4>
            <span className='py-4 text-lg w-1/1 text-center text-gray-500'>
              Eplore More by Connecting with us
            </span>
          </div>

          <form className='py-1'>
            <div className="profile flex justify-center py-3">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6 ">
              <input className={styles.textbox} type="text" name="" placeholder='Username' id="" />
              <button className={styles.btn} type='submit'>Let's Go</button>
            </div>

            <div className="text-center py-4">
              <span className=' text-gray-500'>
                Not a member? <Link className=' text-red-500' to="/register">Register Now</Link>
              </span>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
