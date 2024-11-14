import './App.css';
import UserCard from "./Component/UserCard"
import profilepic from "./images/2340.png"



function App() {
  return (
    <div className="App">
      <UserCard name={"Parul Verma"} age={23} location={"Hamirpur,H.P."} profilepic={profilepic}/>
    </div>
  );
}

export default App;
