import React from "react";
import styles from "../ProgressBar/ProgressBar.module.css";



const ProgressBar = ({persantage}) => {
    console.log(persantage);
    return (
        
            <div className={styles.progress}>
                 <div style={{ width: `${persantage}%` }} className={styles.progressInner}></div>
              
           </div>
        
)
}

export default ProgressBar;