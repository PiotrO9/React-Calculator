import { useState } from 'react'
import './App.scss'
import DigitButton from './Components/DigitButton'
import OperationButton from './Components/OperationButton'

function App() {
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
                <input type="range" min={1} max={3}/>
              </div>
            </div>
          </div>
        </div>
        <div className="Calculator__results">
          <p>Wynik</p>
        </div>
        <div className="Calculator__grid">
          <DigitButton digit={7} />
          <DigitButton digit={8} />
          <DigitButton digit={9} />
          <OperationButton operation={"del"}/>
          <DigitButton digit={4} />
          <DigitButton digit={5} />
          <DigitButton digit={6} />
          <OperationButton operation={"+"} />
          <DigitButton digit={1} />
          <DigitButton digit={2} />
          <DigitButton digit={3} />
          <OperationButton operation={"-"} />
          <OperationButton operation={"."} />
          <DigitButton digit={"0"} />
          <OperationButton operation={"/"} />
          <OperationButton operation={"x"} />
          <OperationButton operation={"RESET"}/>
          <OperationButton operation={"="}/>
        </div>
      </main>
    </div>
  )
}

export default App
