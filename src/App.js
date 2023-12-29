import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dimag-backend.vercel.app/data')
        .then(response => response.json())
        .then(data => setData(data));
  }, []);

  return (
      <div>
        <h1>My React App</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div>
  );
}

export default App;
