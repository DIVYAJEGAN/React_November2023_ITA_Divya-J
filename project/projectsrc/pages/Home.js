import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import real1 from "../images/real1.jpg";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${real1})` }}>
        <div className="headerContainer">
          <h1 style={{color:"#008b8b"}}>Blue Sky Real Estates</h1>
          <p style={{color:"#00bfff"}}>Stop Dreaming. Start Living. We Can Help.</p>
          <Link to="/ab" >
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
