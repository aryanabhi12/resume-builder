import React, { useEffect, useRef } from 'react'
import ReactToPrint from 'react-to-print';
import styles from'./Bodyp.module.css';
import {ArrowDown} from 'react-feather'
import Editor from './Editor';
import { useState } from 'react';
import Resume from './Resume';
const Bodyp = () => {
  const colors=["#239ce2", "#48bb78", "rgb(63, 176, 176)","#a0aec0","#ed8936"];
  const sections={
    basicInfo: "Basic info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    others: "Others"
  }
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
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
        <div className={styles.colors}>
          {colors.map((item)=>(
            <span
               key={item}
               style={{backgroundColor: item}}
               className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}/>
          ))}
          </div>
          <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
        </div>
      <div className={styles.main}>
        <Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation}/>
        <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
                    
        />
      </div>
    </div>
  )
}

export default Bodyp 
