import React, { useState,useEffect } from 'react';
function App() {
  const [state,setState] = useState(null);

  useEffect(() => {
    const url = "https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setState(json.data)
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);
  return (
    <>
        <div className="App">
       
        <table className='table'>
  <thead>
    <tr>
      <th>#</th>
      <th>Open</th>
      <th>High</th>
      <th>Low</th>
      <th>Close</th>
    </tr>
  </thead>
  <tbody>
  {state && state.map((val, key) => {
          return (
            <tr key={key}>
               <td>{key}</td>
              <td>{val.open}</td>
              <td>{val.high}</td>
              <td>{val.low}</td>
              <td>{val.close}</td>
            </tr>
          )
        })}
  </tbody>
</table>
      
    </div>
    </>
  );
}

export default App;
