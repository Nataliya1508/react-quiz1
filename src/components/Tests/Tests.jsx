import React from "react";
import styles from "../Tests/Tests.module.css"
// import ProgressBar from "components/ProgressBar/ProgressBar";

const Tests = ({persantage, test, index, onClickVariant }) => {
    
    return (
        <>
            <h1 className={styles.title}>{test.title}</h1>
             {/* <ProgressBar persantage={persantage}/> */}
            <ul>
                {
                    test.variants.map((variant, index) => (
                        <li onClick={() => onClickVariant(index)} key={index} >{variant}</li>
                    ))
                }
            </ul>
        </>
)
}

export default Tests;