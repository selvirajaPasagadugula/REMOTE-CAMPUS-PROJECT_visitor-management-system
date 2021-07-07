import React from "react";

import StatsCard from "./../../components/StatsCard";
import Header from "./../../components/Header";
import EnterVisitorPage from "./../EnterVisitorPage";
import cardDetails from "./../../components/CardDetails";

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

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <p className="text-greet">Hello, Mr.Rajan! Welcome back...</p>
      <div className="container">{cardDetails.map(createCard)}</div>
      <EnterVisitorPage />
    </div>
  );
};

export default Home;
