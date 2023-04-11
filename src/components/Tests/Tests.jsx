import React from "react";
import styles from "../Tests/Tests.module.css"

const Tests = ({test, index, onClickVariant}) => {
    return (
        <>
            <h1>{test.title}</h1>
            <ul>
                {
                    test.variants.map((variant, index) => (
                        <li onClick={() => onClickVariant(index)} key={index}>{variant}</li>
                    ))
                }
            </ul>
        </>
)
}

export default Tests;