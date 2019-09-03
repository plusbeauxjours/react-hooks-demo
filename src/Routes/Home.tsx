import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <Link to={"/context"}>
      <h1>CONTEXT</h1>
    </Link>
    <Link to={"/reducer"}>
      <h1>REDUCER</h1>
    </Link>
  </>
);

export default Home;
