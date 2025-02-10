import { useEffect, useState } from 'react';

function App() {
  const [publicIp, setPublicIp] = useState('');

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => setPublicIp(data.ip))
      .catch((err) => console.error("Error fetching IP:", err));
  }, []);

  return <div>Public IP: {publicIp}</div>;
}

export default App;
