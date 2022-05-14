import React, { useState } from 'react'
import Button from './Button';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>カウント : {count}</p>
      <Button btn_click={() => {setCount(count - 1) }} btn_txt="マイナス" />
      <Button btn_click={() => {setCount(count + 1) }} btn_txt="プラス" />
    </div>
  );
}

export default App;
