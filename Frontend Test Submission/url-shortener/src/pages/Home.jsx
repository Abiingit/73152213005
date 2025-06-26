import React, { useState } from "react";
import UrlForm from "../components/UrlForm";
import UrlCard from "../components/UrlCard";

const Home = () => {
  const [shortened, setShortened] = useState([]);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>URL Shortener</h1>
      <UrlForm onResult={setShortened} />
      {shortened.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Results</h2>
          {shortened.map((item, idx) => (
            <UrlCard key={idx} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;