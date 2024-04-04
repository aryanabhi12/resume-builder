import React, { useEffect, useRef } from 'react'
import ReactToPrint from 'react-to-print';
import styles from'./Bodyp.module.css';
import {ArrowDown} from 'react-feather'
import Editor from './Editor';
import { useState } from 'react';
import Resume from './Resume';
import Resume2 from './Resume2';
// import SecondResume from './SecondResume.js';
import SecondResume from './SecondResume.js';
import ThirdResume from './ThirdResume.js';
import FourthResume from './FourthResume.js';

const Bodyp = () => {
  
  const sections={
    basicInfo: "Basic info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    others: "Others",
  }
  const resumeRef = useRef();

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.others]: {
      id: sections.others,
      sectionTitle: sections.others,
      detail: "",
    },
    [sections.Template]: {
      id: sections.Template,
      sectionTitle: sections.Template,
      Templateno: "",
    },
  });

  useEffect(()=>
  {
   console.log(resumeInformation);
  },[resumeInformation]
  )

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume builder</p>
      <div className={styles.toolbar}>
        
  
        </div>
      <div className={styles.main}>
        <Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation}/>
        <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            
                    
        />
        <SecondResume 
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          
        />
        <ThirdResume 
        ref={resumeRef}
        sections={sections}
        information={resumeInformation}
        />
        <FourthResume
        ref={resumeRef}
        sections={sections}
        information={resumeInformation}
        />
        {/* <Resume2
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
        /> */}
      </div>
    </div>
  )
}

export default Bodyp 
