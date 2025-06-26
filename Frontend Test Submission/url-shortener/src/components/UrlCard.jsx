import React from "react";

const UrlCard = ({ data }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <p><strong>Original:</strong> {data.originalUrl}</p>
      <p>
        <strong>Short:</strong>{" "}
        <a href={data.shortUrl} target="_blank" rel="noreferrer">
          {data.shortUrl}
        </a>
      </p>
      <p><strong>Expires:</strong> {new Date(data.expiry).toLocaleString()}</p>
    </div>
  );
};

export default UrlCard;