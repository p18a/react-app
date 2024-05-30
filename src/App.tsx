import { useEffect, useState } from "react";
import "./App.css";

function Posts() {
  return (
    <div className="card">
      <h2>Posts</h2>
    </div>
  );
}

function Comments() {
  return (
    <div className="card">
      <h2>Comments</h2>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const json = await res.json();

      setPosts(json);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Posts />
      <Comments />
    </div>
  );
}

export default App;
