import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const Increment=()=>{
    setCount(count+1)
  }

  const Reset=()=>{
    setCount(0)
  }

  const Decrement=()=>{
    if(count>0){
      setCount(count-1)
    }
  }

  const Multiply=()=>{
    if(count!==0){
      setCount(count*2)
    }
  }

  const Divide=()=>{
    if(0==(count%2)){
      setCount(count/2)
    }
  }



  return (
    <>
      <div className='App'>
        <h1>Counter App</h1>
        <p>Count: {count}</p>

        <div>
          <button onClick={Increment}>+</button>
          <button onClick={Decrement}>-</button>
        </div>

        <div>
          <button onClick={Multiply}>X2</button>
          <button onClick={Divide}>/2</button>
        </div>
          
          <div> 
            <button onClick={Reset}>Reset</button> </div>

      </div>
      
    </>
  )
}

export default App
