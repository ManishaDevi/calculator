import React, {useState} from 'react';
import { connect } from 'react-redux';

import CalculateButton from './components/CalculateButton/CalculateButton';
import Result from './components/CalculateButton/Result';

import './App.css';

function App() {
  const [number, setNumber] = useState({ firstNumber: '', secondNumber: ''}); 
  const [errors, setErrors] = useState({
    firstNumber: '',
    secondNumber: ''
});
const handleNumberChange = name => event => { 
  validateInput(name, event.target.value);
  setNumber({ ...number, [name]: event.target.value}); 
};

const validateInput = (name, value) => {
  switch (name) {
    case 'firstNumber':
      if (value.length === 0) setErrors({ ...errors, firstNumber: 'Please enter number' });
      else setErrors({ ...errors, firstNumber: '' });
      break;

    case 'secondNumber':
      if (value.length === 0) setErrors({ ...errors, secondNumber: 'Please enter Number' });
      else setErrors({ ...errors, secondNumber: '' });
      break;
    default : setErrors({})
  }
};

return (
    <div className="App">
    <div>
      <h4 className="header">Calculator</h4>

        {/* number input fields */}
        <div className="container">
          <div className="input__container">

            <label className="label">Enter value 1</label><br/>
            <input 
            type="number"
            name="firstNumber"
            className="input__number"
            value={number.firstNumber}
            onChange={handleNumberChange('firstNumber')}/>
            {errors.firstNumber && <span className="primary-text">{errors.firstNumber}</span>}<br/>

            <label className="label">Enter value 2</label><br/>
            <input 
            type="number"
            name="secondNumber"
            className="input__number"
            value={number.secondNumber}
            onChange={handleNumberChange('secondNumber')}/>
            {errors.secondNumber && <span className="primary-text">{errors.secondNumber}</span>}<br/>

          </div>

          {/* call button component and pass in the entered numbers */}
          <CalculateButton number={number}/>

          {/* calculated result */}
          <Result/>

        </div>
      </div>
    </div>
  );
}

export default connect(null)(App);
