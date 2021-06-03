import { useState, useEffect } from 'react'
import './App.css';

function url(path) {
  return process.env.NODE_ENV === 'development'
  ? `http://localhost:4001${path}` : path
}

function App() {
  const [data, setData] = useState("hello")
  useEffect(() => {
    fetch(url('/api/'))
    .then(res => res.json())
    .then(apiData => setData(apiData.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {data}
      </header>
    </div>
  );
}

export default App;
