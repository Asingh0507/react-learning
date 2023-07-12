import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Result from './components/Result';


function App() {

  const [results, setResults] = useState(null);
  let currSaving = 10000;

  const calculateHandler = (userInput) => {
    currSaving = +userInput['current-savings']
    const yearlyData = []; 

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

   
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyData)
    setResults(yearlyData);
    

  };

  return (
    <div>
      <Header />
      <Form onCalculate = {calculateHandler}/>
      {!results && <p style={{textAlign:'center'}}> No Investments Calculated yet</p>}
      {results && <Result data={results} initialInvestment={currSaving}/>} 
     
      
    
    </div>
  );
}

export default App;
