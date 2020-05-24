import React,{useState} from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTimes, faDivide } from '@fortawesome/free-solid-svg-icons'

import {calculateAction} from '../../actions/calculatorAction';
import Button from '../common/Button';

import "./CalculateButton.scss";

function CalculateButton ({number,dispatch}) {
    //storing the calculated result
    const [result, setResult] = useState();

    //function to calculate numbers depending on the button selected
    const calculate = (event) => {
        switch (event.target.value) {
            case 'Add':
                setResult(parseInt(number.firstNumber) + parseInt(number.secondNumber))
                break;

            case 'Substract':
                setResult(parseInt(number.firstNumber) - parseInt(number.secondNumber))
                break;

            case 'Multiply':
                setResult(parseInt(number.firstNumber) * parseInt(number.secondNumber))
                break;

            case 'Divide':
                if(parseInt(number.secondNumber) === 0) alert("You are trying to divide a number by 0")
                else  setResult(parseInt(number.firstNumber) / parseInt(number.secondNumber))     
                break;
            default : setResult()
        }
    }
    if(result){
        dispatch(calculateAction(result))
    }
    
return (
    //imported the common button and passed in the prop value
    <div className="button__container">
        <Button label="Add" icon={<FontAwesomeIcon icon={faPlus}/>} clicked={event => calculate(event)}/>
        <Button label="Substract" icon={<FontAwesomeIcon icon={faMinus}/>} clicked={event => calculate(event)}/>   
        <Button label="Multiply" icon={<FontAwesomeIcon icon={faTimes}/>} clicked={event => calculate(event)}/>
        <Button label="Divide" icon={<FontAwesomeIcon icon={faDivide}/>} clicked={event => calculate(event)}/>
    </div>
    );
}

export default connect(null)(CalculateButton);