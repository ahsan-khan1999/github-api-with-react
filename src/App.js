/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { v4 as uuidV4} from 'uuid'
import './App.css';

function App() {
  const [repos, setRepos] = useState([{}]);

  useEffect(() => {
    async function access() {
      let reposs = await fetch('https://api.github.com/users/ahsan-khan1999/repos')
      const data = await reposs.json()
      console.log(data);
      setRepos(data);
    }
    access()
  }, [])
  // ,[]} in earlier react we have commingprops and rendered props if these are not equal then only we need to call api now 
  // we just leave these [] as it is if we need to call for the first time only once
  // now if we recieve an event and we dont want to reflect the effect of this hook to dom then we need to maintain an identifier here and we will toggle that identifer when we recieve an event related to it 
  // useEffect(callback[, deps]) hook. This hook executes callback after mounting, and after subsequent renderings when deps change

  return (
    <div className="App">
      <ul>{
        repos.map((d) => {
          return <li key={uuidV4()}>{d.name}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
