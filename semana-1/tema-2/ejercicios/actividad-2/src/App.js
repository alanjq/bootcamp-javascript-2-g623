import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json)
        console.log('json', json);
      })
  }, [])

  return (
    <div>
      {Array.isArray(data) && data.map((post, i) =>
        <div key={i} style={{ border: 'solid' }}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
