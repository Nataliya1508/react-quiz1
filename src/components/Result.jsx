import React from "react";
import styles from "./Tests/Tests.module.css"

const Result = ({ correct, tests }) => {
    
    return (
        <div className={styles.wrapperButton}>
            {/* result {correct} */}
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278973.png" alt="" />
            <h2>Кількість правильних відповідей: {correct}</h2>
            <a href="/">
                <button >Спробувати щє раз</button>
       </a>
            
        </div>
)
}



export default Result;