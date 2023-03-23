import { useState, useEffect } from 'react'
import './App.scss'
import DigitButton from './Components/DigitButton'
import OperationButton from './Components/OperationButton'

function App() {
  const [prevNumber, setPrevNumber] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");

  useEffect(() => {
    if(currentOperation === "DEL" || currentOperation === "RESET") {
      setCurrentOperation("");
    }
  }, [currentOperation]);

  const handleDigitclick = (digit) => {
    if(digit === "," && currentNumber.includes(",")) {
      return;
    }
    else if(digit === "0" && currentNumber == "0") {
      return;
    }
    setCurrentNumber(currentNumber + digit)
  }

  const handleOperationCLick = (operation) => {
    switch(operation) {
      case 'DEL': {
        setCurrentNumber("");
        setPrevNumber("");
        setCurrentOperation("");
        break;
      }
      case 'RESET': {
        setCurrentNumber("");
        setPrevNumber("");
        setCurrentOperation("");
        break;
      }
      case "+": {
        if(currentOperation != "") {
          EvalResult();
          setCurrentOperation("+");
        }
        else {
          setPrevNumber(currentNumber);
          setCurrentNumber("");
          setCurrentOperation("");
        }
        break;
      }
      case "-": {
        if(currentOperation != "") {
          EvalResult();
          setCurrentOperation("-");
        }
        else { 
          setPrevNumber(currentNumber);
          setCurrentNumber("");
          setCurrentOperation("");
        }
        break;
      }
      case "x": {
        if(currentOperation != "") {
          EvalResult();
          setCurrentOperation("x");
        }
        else {
          setPrevNumber(currentNumber);
          setCurrentNumber("");
          setCurrentOperation("");
        }
        break;
      }
      case "/": {
        if(currentOperation != "") {
          EvalResult();
          setCurrentOperation("/");
        }
        else {
          setPrevNumber(currentNumber);
          setCurrentNumber("");
          setCurrentOperation("");
        }
        break;
      }   
    }
    
    setCurrentOperation(operation)
  }

  const EvalResult = () => {
    let tmp = prevNumber + currentOperation + currentNumber;
    setPrevNumber(eval(tmp.replace("x","*").replace(",",".")));
    setCurrentNumber("");
    setCurrentOperation("");
  }

  return (
    <div className="App">
      <main className='Calculator'>
        <div className="Calculator__settings">
          <p>calc</p>
          <div className="Calculator__settings--themeSwitch">
            <div>
              <p>Theme</p>
            </div>
            <div className="Switch">
              <div className="ThemeNumbers">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div className="SwitchInput">
                <input type="range" min={1} max={3} />
              </div>
            </div>
          </div>
        </div>
        <div className="Calculator__results">
          <p>{prevNumber} {currentOperation} {currentNumber}</p>
        </div>
        <div className="Calculator__grid">
          <DigitButton digitClick={handleDigitclick} digit={7} />
          <DigitButton digitClick={handleDigitclick} digit={8} />
          <DigitButton digitClick={handleDigitclick} digit={9} />
          <OperationButton operationClick={handleOperationCLick} operation={"DEL"}/>
          <DigitButton digitClick={handleDigitclick} digit={4} />
          <DigitButton digitClick={handleDigitclick} digit={5} />
          <DigitButton digitClick={handleDigitclick} digit={6} />
          <OperationButton operationClick={handleOperationCLick} operation={"+"} />
          <DigitButton digitClick={handleDigitclick} digit={1} />
          <DigitButton digitClick={handleDigitclick} digit={2} />
          <DigitButton digitClick={handleDigitclick} digit={3} />
          <OperationButton operationClick={handleOperationCLick} operation={"-"} />
          <DigitButton digitClick={handleDigitclick} digit={","} />
          <DigitButton digitClick={handleDigitclick} digit={"0"} />
          <OperationButton operationClick={handleOperationCLick} operation={"/"} />
          <OperationButton operationClick={handleOperationCLick} operation={"x"} />
          <OperationButton operationClick={handleOperationCLick} operation={"RESET"}/>
          <OperationButton evalClick={EvalResult} operation={"="}/>
        </div>
      </main>
    </div>
  )
}

export default App
