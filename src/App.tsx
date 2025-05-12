import { useEffect, useState } from 'react';
import ListComponent from './Components/ListComponent';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example API: JSONPlaceholder
  const API_URL = 'https://jsonplaceholder.typicode.com/todos/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result.slice(0, 10)); // limit to 10 items
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Post List</h1>
      <ListComponent
        items={data}
        renderItem={(item) => (
          <div>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        )}
      />
    </div>
  );
};

export default App;
