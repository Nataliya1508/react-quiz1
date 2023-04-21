import React from "react";
// import styles from "../Tests/Tests.module.css"

const Result = ({correct, tests}) => {
    return (
        <>
            result {correct}
            {/* <h2>Кількість правильних відповідей {correct} з {tests.length}</h2> */}
            <a href="/">
                <button>Спробувати щє раз</button>
       </a>
            
        </>
)
}

export default Result;