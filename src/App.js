import React from 'react';
import { useEffect, useState } from 'react';
import Blog from './Blog';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <Blog />
  );
}

export default App;
