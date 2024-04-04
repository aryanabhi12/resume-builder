import { ArrowDown, AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from "react-feather";
import styles from "./FourthResume.module.css"
import React, { forwardRef, useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

const FourthResume = forwardRef((props, ref) => {
    const information = props.information;
    const sections = props.sections;
    const containerRef = useRef();



    const [columns, setColumns] = useState([[], [], []]);
    const [source, setSource] = useState("");
    const [target, seTarget] = useState("");
    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        achievements: information[sections.achievements],
        education: information[sections.education],
        basicInfo: information[sections.basicInfo],
        summary: information[sections.summary],
        others: information[sections.others],
    };

    const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);

        return `${date.getMonth() + 1}/${date.getFullYear()}`;
    };


    const sectionDiv = {
        [sections.workExp]: (
            <div
                key={"workexp"}
                draggable
                onDragOver={() => seTarget(info.workExp?.id)}
                onDragEnd={() => setSource(info.workExp?.id)}
                className={`${styles.section} ${info.workExp?.sectionTitle ? "" : styles.hidden
                    } ${styles.workExperience}`}
            >
                <h1 className={styles.border}> {info.workExp.sectionTitle}</h1>
                <div className={styles.content}>
                    {info.workExp?.details?.map((item) => (
                        <div className={styles.sectionDetails} key={item.title}>
                            {item.title ? (
                                <h4>{item.title}</h4>
                            ) : (
                                <span />
                            )}
                            {item.companyName ? (
                                <p className={styles.highlight}>{item.companyName}</p>
                            ) : (
                                <span />
                            )}
                            {item.certificationLink ? (
                                <a className={styles.link} href={item.certificationLink}>
                                    <Paperclip />
                                    {item.certificationLink}
                                </a>
                            ) : (
                                <span />
                            )}
                            {item.startDate && item.endDate ? (
                                <div className={`${styles.date} ${styles.link}`}>
                                    <Calendar /> {getFormattedDate(item.startDate)}-
                                    {getFormattedDate(item.endDate)}
                                </div>
                            ) : (
                                <div />
                            )}
                            {item.location ? (
                                <p className={styles.link}>
                                    <MapPin /> {item.location}
                                </p>
                            ) : (
                                <span />
                            )}
                            {item.points?.length > 0 ? (
                                <div className={styles.projectDesc}>

                                    <ol>
                                        {item.points?.map((elem, index) => (
                                            <li key={elem + index}>
                                                {elem}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            ) : (
                                <span />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        ),
        [sections.project]: (
            <div
                key={"Projects"}
                draggable
                onDragOver={() => seTarget(info.project?.id)}
                onDragEnd={() => setSource(info.project?.id)}
                className={`${styles.section} ${info.project?.sectionTitle ? "" : styles.hidden
                    }`}
            >
                <div className={styles.sectionTitle}>
                    <h1 className={styles.border}> {info.project.sectionTitle}</h1>
                </div>
                <div className={styles.sectionDetails}>
                    {info.project?.details?.map((item) => (
                        <div className={styles.sectionBorder} >
                            {item.title ? (
                                <h4>{item.title}</h4>
                            ) : (
                                <span />
                            )}
                            <div className={styles.sectionLinks}>
                                {item.link ? (
                                    <a className={styles.link} href={item.link}>
                                        <Paperclip />
                                        {item.link}
                                    </a>
                                ) : (
                                    <span />
                                )}
                                {item.github ? (
                                    <a className={styles.link} href={item.github}>
                                        <GitHub />
                                        {item.github}
                                    </a>
                                ) : (
                                    <span />
                                )}
                            </div>

                            {item.overview ? (
                                <div>
                                    <p>{item.overview}</p>

                                </div>

                            ) : (
                                <span />
                            )}
                            {item.points?.length > 0 ? (
                                <div className={styles.projectDesc}>
                                    <ol>
                                        {item.points?.map((elem, index) => (
                                            <li key={elem + index}>
                                                {elem}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            ) : (
                                <span />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        ),
        [sections.education]: (
            <div
                key={"Education"}
                draggable
                onDragOver={() => seTarget(info.education?.id)}
                onDragEnd={() => setSource(info.education?.id)}
                className={`${styles.section} ${styles.education} ${info.education?.sectionTitle ? "" : styles.hidden
                    }`}
            >
                <h1 className={styles.border}> {info.education?.sectionTitle}</h1>
                <div className={`${styles.sectionDetails}`} >
                    {info.education?.details?.map((item) => (
                        <div className={styles.sectionBorder}>
                            {item.title ? (
                                <div>
                                    <h4>{item.title}</h4>
                                </div>
                            ) : (
                                <span />
                            )}
                            {item.college ? (
                                <div>
                                    <h5 className={styles.highlight}>{item.college}</h5>
                                </div>
                            ) : (
                                <span />
                            )}
                            {item.startDate && item.endDate ? (
                                <div className={`${styles.date} ${styles.link}`}>
                                    <Calendar /> {getFormattedDate(item.startDate)} -
                                    {getFormattedDate(item.endDate)}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </div>
            </div>
        ),
        [sections.achievements]: (
            <div
                key={"Achievements"}
                draggable
                onDragOver={() => seTarget(info.achievements?.id)}
                onDragEnd={() => setSource(info.achievements?.id)}
                className={`${styles.section} ${styles.achievements} ${info.achievements?.sectionTitle ? "" : styles.hidden
                    }`}
            >

                <div className={styles.projectDesc}>
                    <h1 className={styles.border}> {info.achievements?.sectionTitle}</h1>
                    {info.achievements?.points?.length > 0 ? (
                        <ol className={styles.numbered}>
                            {info.achievements?.points?.map((elem, index) => (
                                <li key={elem + index}>
                                    {elem}
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <span />
                    )}
                </div>


            </div>
        ),
        [sections.summary]: (
            <div
                key={"Summary"}
                draggable
                onDragOver={() => seTarget(info.summary?.id)}
                onDragEnd={() => setSource(info.summary?.id)}
                className={`${styles.section} ${styles.summary} ${info.summary?.sectionTitle ? "" : styles.hidden
                    }`}
            >
                <h1 className={styles.border}>{info.summary?.sectionTitle}</h1>
                <p>{info.summary?.detail}</p>
            </div>
        ),
        [sections.others]: (
            <div
                key={"Others"}
                draggable
                onDragOver={() => seTarget(info.others?.id)}
                onDragEnd={() => setSource(info.others?.id)}
                className={`${styles.section} ${info.others?.sectionTitle ? "" : styles.hidden
                    }`}
            >

                <h1 className={styles.border}>{info.others?.sectionTitle}
                </h1>

                <p >{info?.others?.detail}</p>
            </div>
        ),
    };




const swapSourceTarget = (source, target) => {
    if (!source || !target) return;

    const tempColumns = [...columns];

    let sourceRowIndex = -1;
    let sourceColumnIndex = -1;

    // Find the source element's index
    tempColumns.forEach((column, columnIndex) => {
        const index = column.findIndex((item) => item === source);
        if (index !== -1) {
            sourceRowIndex = index;
            sourceColumnIndex = columnIndex;
        }
    });

    let targetRowIndex = -1;
    let targetColumnIndex = -1;

    // Find the target element's index
    tempColumns.forEach((column, columnIndex) => {
        const index = column.findIndex((item) => item === target);
        if (index !== -1) {
            targetRowIndex = index;
            targetColumnIndex = columnIndex;
        }
    });

    // Swap the source and target elements
    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] = tempColumns[targetColumnIndex][targetRowIndex];
    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
};


    useEffect(() => {
        setColumns([
            [sections.project, sections.education],
            [sections.workExp, sections.achievements],
            [sections.summary, sections.others]
        ]);
    }, []);

    useEffect(() => {
        swapSourceTarget(source, target);
    }, [source]);





    return (

        <div ref={ref}>
      
            <div  className={styles.secondResumeContainer} ref={containerRef}>
                <div className={styles.sideBar}>
                    <div className={styles.nameContainer} >
                        <h1> {info.basicInfo?.detail?.name}</h1>
                        <h4>{info.basicInfo?.detail?.title}</h4>
                    </div>

                    <div className={styles.userInfo}>
                        <div className={styles.links}>
                            {info.basicInfo?.detail?.email ? (

                                <a type="email" className={styles.link}>
                                    <AtSign /> {info.basicInfo?.detail?.email}
                                </a>
                            ) : (<span />)
                            }

                            {info.basicInfo?.detail?.phone ? (
                                <a className={styles.link}>
                                    <Phone /> {info.basicInfo?.detail?.phone}
                                </a>
                            ) : (
                                <span />
                            )}

                            {info.basicInfo?.detail?.linkedin ? (
                                <a className={styles.link}>
                                    <Linkedin /> {info.basicInfo?.detail?.linkedin}
                                </a>
                            ) : (
                                <span />
                            )}
                            {info.basicInfo?.detail?.github ? (
                                <a className={styles.link}>
                                    <GitHub /> {info.basicInfo?.detail?.github}
                                </a>
                            ) : (
                                <span />
                            )}
                        </div>
                    </div>
                </div>


                



                <div className={styles.sectionsContainer}>
                    {columns[0].map((item) => sectionDiv[item])}
                    {columns[1].map((item) => sectionDiv[item])}
                    {columns[2].map((item) => sectionDiv[item])}
                </div>

            </div>
            <ReactToPrint
                trigger={() => {
                    return (
                        <button className={styles.butn}>
                            Download <ArrowDown />
                        </button>
                    );
                }}
                content={() => containerRef.current}
            />
        </div>
    );

})

export default FourthResume;