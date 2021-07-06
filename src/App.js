import "./App.css";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import cardDetails from "./components/CardDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <p style={{ padding: "10vh 5vh 0", fontSize: ".9rem" }}>
        Hello, Mr.Rajan! Welcome back...
      </p>
      <div className="container">
        {cardDetails.map((item) => {
          console.log(1);
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
        })}
      </div>
      <div className="button-container" style={{ textAlign: "center" }}>
        <button
          style={{
            margin: "4rem 0 0",
          }}
          className="btn btn-black btn-large">
          ENTER VISITOR DETAILS
        </button>
      </div>
    </div>
  );
}

export default App;
