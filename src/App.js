// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import cardDetails from "./components/CardDetails";
import EnterVisitor from "./containers/EnterVisitorPage";

const createCard = (item) => {
  return (
    <StatsCard
      key={item.key}
      title={item.title}
      countIn={item.countIn}
      countOut={item.countOut}
      countSuspicious={item.countSuspicious}
      bgcolor={item.bgcolor}
    />
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <p className="text-greet">Hello, Mr.Rajan! Welcome back...</p>
      <div className="container">{cardDetails.map(createCard)}</div>
      <EnterVisitor></EnterVisitor>
    </div>
  );
}

export default App;
