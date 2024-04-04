import React from 'react'
import styles from'./Header.module.css'
import resumeSvg from '../assets/resume.svg'
const Header = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.left}>
        
      <p className={styles.heading}>A <span> Resume </span>that stands out!</p>
      <p className={styles.heading}>Make your own resume. <span> it's free </span></p>
      </div>
     
      <div className={styles.right}>
      <h1 className={styles.aname}>Visual<span>CV</span></h1>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  )
}

export default Header 
