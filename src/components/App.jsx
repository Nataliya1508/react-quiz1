import { useState } from "react";
import Tests from "./Tests/Tests";
import Result from "./Result";
import tests from "./../data/tests.json"
import styles from "./Tests/Tests.module.css"

export const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const test = tests[step]

  const onClickVariant = (index) => {
    // console.log(step, index);
    setStep(step + 1);

    if (index === test.correct) {
      setCorrect (correct +1)
    }

  }

  return (
    <div className={styles.App}> {
      step !== tests.length ? <Tests test={test} onClickVariant={onClickVariant} /> : <Result correct={correct} test={test}/>
    }
      
      
    </div>
  );
};
