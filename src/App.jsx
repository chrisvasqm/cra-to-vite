import './App.css';
import React from 'react';

function App() {
  const fakeUrl = import.meta.env.FAKE_URL;
  const viteUrl = import.meta.env.VITE_URL;

  console.log(fakeUrl);
  console.log(viteUrl);
  
  return (
    <main className='container'>
      <h1>App</h1>
      <p>Description...</p>
      <p>{import.meta.env.FAKE_URL}</p>
      <p>{import.meta.env.VITE_URL}</p>
    </main>
  );
}

export default App;
