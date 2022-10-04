import './App.css';
import Section from './components/Section'
import TipBtn from './components/TipBtn';
import Amount from './components/Amount'
import Input from './components/Input'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import { useState, useEffect } from 'react'

function App() {
  const [bill, setBill] = useState(null)
  const [percentage, setPercentage] = useState(0)
  const [customPercentage, setCustomPercentage] = useState('Custom');
  const [numPeople, setNumPeople] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [activeIndex, setActiveIndex] = useState(-1)

  const percentArr = [
    { percent: 5 },
    { percent: 10 },
    { percent: 15 },
    { percent: 25 },
    { percent: 50 }
  ]

  const attributes = {
    color: "disabled",
    fontSize: "small",
    sx: {
        position: 'absolute',
        top: 19,
        left: 10
    }
}

  useEffect(() => {
    if (bill !== 0 && percentage !== 0 && numPeople !== 0) {
      if (bill !== null && numPeople !== null) {
        setDisabled(false)
      }
    } else {
      setDisabled(true)
    }
  }, [bill, percentage, numPeople])

  useEffect(() => {
    if (bill < 0) {
      setBill(0)
    }

    if (percentage < 0) {
      setPercentage(0)
    }

    if (numPeople < 0) {
      setNumPeople(0)
    }
  }, [bill, percentage, numPeople])

  useEffect(() => {
    setActiveIndex(-1)
  }, [customPercentage])

  return (
    <>
      <h1>SPLI<br/>TTER</h1>
      <div className="container">
        <Section>
          <Input
            title="Bill"
            bill={bill}
            setBill={setBill}
            numPeople={numPeople}
            icon={<AttachMoneyIcon {...attributes} />}
            autoFocus={true}
            disabled={disabled}
          />
          <div data-panel>
            <h3 data-panel-title>Select Tip %</h3>
            <div className="btn-container">
              {percentArr.map((item, index) =>
                <TipBtn
                  key={`tip-btn-${index + 1}`}
                  index={index}
                  value={item.percent}
                  setPercentage={setPercentage}
                  setActiveIndex={setActiveIndex} 
                  className={index === activeIndex ? 'tip-btn active' : 'tip-btn'}
                  color={item.color}
                />
              )}
              <input
                className="custom"
                type="number"
                placeholder="Custom"
                onChange={event => {
                  setCustomPercentage(event.target.value)
                  setPercentage(event.target.value)
                }}
                value={customPercentage}   
              />
            </div>
          </div>
          <Input
            title="Number of People"
            bill={bill}
            numPeople={numPeople}
            setNumPeople={setNumPeople}
            icon={<PersonIcon {...attributes} />}
          />
        </Section>
        <Section color="green">
          <Amount title="Tip Amount" amount={bill*(percentage/100)/numPeople} />
          <Amount title="Total" amount={bill * (1 + (percentage / 100)) / numPeople} />
          <button
            className={disabled ? 'reset-btn disabled' : 'reset-btn'}
            onClick={() => {
              setBill(0)
              setPercentage(0)
              setNumPeople(0)
              setCustomPercentage('Custom')
              setActiveIndex(-1)
            }}
          >
            RESET
          </button>
        </Section>
      </div>
    </>
  )
}

export default App;
