import { useState } from "react";
import Tests from "./Tests/Tests";
import Result from "./Result";
import ProgressBar from "./ProgressBar/ProgressBar";
import tests from "./../data/tests.json"
import styles from "./Tests/Tests.module.css"

export const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const persantage = Math.round((step / tests.length * 100));
  

  const test = tests[step]

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === test.correct) {
      setCorrect(correct + 1);
     
    }
  
  }

  return (
    <div className={styles.App}>
       <ProgressBar persantage={persantage}/>
      { 
        step !== tests.length ? <Tests test={test} onClickVariant={onClickVariant}/> : <Result correct={correct} test={test}/>
    }
      
     
    </div>
  );
};
