import "./styles.css";
import axios from "axios";

export default function App() {
  const ocClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const ocClickUsers1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <button onClick={ocClickUsers}>users</button>
      <button onClick={ocClickUsers1}>id=1のusers</button>
    </div>
  );
}
