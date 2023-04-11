import { useState } from "react";
import Tests from "./Tests/Tests";
import tests from "./../data/tests.json"

export const App = () => {
  const [step, setStep] = useState(0);
  const test = tests[step]

  const onClickVariant = (index) => {
    // console.log(step, index);
    setStep(step + 1);

  }

  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Tests test={test} onClickVariant={onClickVariant}/>
      
    </div>
  );
};
