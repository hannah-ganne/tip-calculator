import './App.css';
import Section from './components/Section'
import TipBtn from './components/TipBtn';
import Amount from './components/Amount'
import { useState, useContext } from 'react'

function App() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(null);
  const [numPeople, setNumPeople] = useState(null)

  return (
    <>
      <h1>SPLI<br/>TTER</h1>
      <div className="container">
        <Section>
          <div data-panel>
            <h3>Bill</h3>
            <input data-input-bill type="number" placeholder={0} onChange={event => setBill(event.target.value)} value={bill} />
          </div>
          <div data-panel>
            <h3>Select Tip %</h3>
            <div className="btn-container">
              <TipBtn value={0.05} setPercentage={setPercentage} />
              <TipBtn value={0.1} setPercentage={setPercentage} />
              <TipBtn value={0.15} setPercentage={setPercentage} />
              <TipBtn value={0.25} setPercentage={setPercentage} />
              <TipBtn value={0.50} setPercentage={setPercentage} />
              <TipBtn color="green" setPercentage={setPercentage} />
            </div>
          </div>
          <div data-panel>
            <h3>Number of People</h3>
            <input data-input-people type="number" placeholder={0} onChange={event => setNumPeople(event.target.value)} value={numPeople} />
          </div>
        </Section>
        <Section color="green">
          <Amount title="Tip Amount" amount={bill*percentage} />
          <Amount title="Total" amount={bill*(1+percentage)/numPeople} />
          <button className="reset-btn">RESET</button>
        </Section>
      </div>
    </>
  )
}

export default App;
