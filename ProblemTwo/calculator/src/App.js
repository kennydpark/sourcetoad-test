import React, { useState } from 'react';
import Button from './components/Button';

const App = () => {
  const [num, setNum] = useState("0");
  const [temp, setTemp] = useState(null);
  const [operator, setOperator] = useState(null);
  const [expression, setExpression] = useState(null);

  const handleClick = buttonKey => () => {
    const parsedNum = parseFloat(num);

    if (buttonKey === 'AC') {
      setNum('0');
      setTemp(null);
      setOperator(null);
      setExpression(null);
      return;
    }

    if (buttonKey === '±') {
      setNum((parsedNum * -1).toString());
      return;
    }

    if (buttonKey === '%') {
      setNum((parsedNum / 100).toString());
      setTemp(null);
      setOperator(null);
      setExpression(null);
      return;
    }

    if (buttonKey === '.') {
      if (num.includes('.')) return;
      setNum(num + '.');
      return;
    }

    if (buttonKey === '+') {
      if (operator === null) {
        setTemp(parseFloat(num));
      } else {
        if (operator === '+') {
          setTemp(temp + parseFloat(num));
        } else if (operator === '−') {
          setTemp(temp - parseFloat(num));
        } else if (operator === '×') {
          setTemp(temp * parseFloat(num));
        } else if (operator === '÷') {
          setTemp(temp / parseFloat(num));
        }
      }
      setNum('0');
      setOperator('+');
      setExpression(`${num} +`)
      return;
    }

    if (buttonKey === '−') {
      if (operator === null) {
        setTemp(parseFloat(num));
      } else {
        if (operator === '+') {
          setTemp(temp + parseFloat(num));
        } else if (operator === '−') {
          setTemp(temp - parseFloat(num));
        } else if (operator === '×') {
          setTemp(temp * parseFloat(num));
        } else if (operator === '÷') {
          setTemp(temp / parseFloat(num));
        }
      }
      setNum('0');
      setOperator('−')
      setExpression(`${num} -`)
      return;
    }

    if (buttonKey === '×') {
      if (operator === null) {
        setTemp(parseFloat(num));
      } else {
        if (operator === '+') {
          setTemp(temp + parseFloat(num));
        } else if (operator === '−') {
          setTemp(temp - parseFloat(num));
        } else if (operator === '×') {
          setTemp(temp * parseFloat(num));
        } else if (operator === '÷') {
          setTemp(temp / parseFloat(num));
        }
      }
      setNum('0');
      setOperator('×')
      setExpression(`${num} ×`)
      return;
    }

    if (buttonKey === '÷') {
      if (operator === null) {
        setTemp(parseFloat(num));
      } else {
        if (operator === '+') {
          setTemp(temp + parseFloat(num));
        } else if (operator === '−') {
          setTemp(temp - parseFloat(num));
        } else if (operator === '×') {
          setTemp(temp * parseFloat(num));
        } else if (operator === '÷') {
          setTemp(temp / parseFloat(num));
        }
      }
      setNum('0');
      setOperator('÷')
      setExpression(`${num} ÷`)
      return;
    }

    if (buttonKey === '=') {
      if (!operator) return;
      if (operator === '+') {
        setNum((temp + parseFloat(num)).toString());
      } else if (operator === '−') {
        setNum((temp - parseFloat(num)).toString());
      } else if (operator === '×') {
        setNum((temp * parseFloat(num)).toString());
      } else if (operator === '÷') {
        setNum((temp / parseFloat(num)).toString());
      }
      setTemp(null);
      setOperator(null);
      setExpression(null);
      return;
    }

    if (num[num.length - 1] === '.') {
      setNum(num + buttonKey);
    } else {
      setNum((parseFloat(parsedNum + buttonKey)).toString());
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div>{num}</div>
      </div>
      <div className="buttons-container">
        <Button onClick={handleClick} buttonKey="AC" type="top" />
        <Button onClick={handleClick} buttonKey="±" type="top" />
        <Button onClick={handleClick} buttonKey="%" type="top" />
        <Button onClick={handleClick} buttonKey="÷" type="operator" />
        <Button onClick={handleClick} buttonKey="7" />
        <Button onClick={handleClick} buttonKey="8" />
        <Button onClick={handleClick} buttonKey="9" />
        <Button onClick={handleClick} buttonKey="×" type="operator" />
        <Button onClick={handleClick} buttonKey="4" />
        <Button onClick={handleClick} buttonKey="5" />
        <Button onClick={handleClick} buttonKey="6" />
        <Button onClick={handleClick} buttonKey="−" type="operator" />
        <Button onClick={handleClick} buttonKey="1" />
        <Button onClick={handleClick} buttonKey="2" />
        <Button onClick={handleClick} buttonKey="3" />
        <Button onClick={handleClick} buttonKey="+" type="operator" />
        <Button onClick={handleClick} buttonKey="0" />
        <Button onClick={handleClick} buttonKey="." />
        <Button onClick={handleClick} buttonKey="=" type="operator" />
      </div>
    </div>
  )
}

export default App;
