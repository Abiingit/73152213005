import React, { useState } from "react";
import axios from "../api/axiosInstance";

const UrlForm = ({ onResult }) => {
  const [fields, setFields] = useState([
    { originalUrl: "", customCode: "", validity: "" },
  ]);

  const handleChange = (i, field, value) => {
    const updated = [...fields];
    updated[i][field] = value;
    setFields(updated);
  };

  const addField = () => {
    if (fields.length < 5) {
      setFields([...fields, { originalUrl: "", customCode: "", validity: "" }]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = fields.filter((f) => f.originalUrl.trim());
    if (valid.length === 0) return;

    try {
      const res = await axios.post("/shorten", { urls: valid });
      onResult(res.data.shortened);
    } catch (err) {
      console.error("Shortening failed", err);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <input
          type="text"
          placeholder="Original URL"
          value={field.originalUrl}
          onChange={(e) => handleChange(idx, "originalUrl", e.target.value)}
          style={{ width: "60%", marginRight: 8 }}
          required
          />
          <input
          type="text"
          placeholder="Custom Code"
          value={field.customCode}
          onChange={(e) => handleChange(idx, "customCode", e.target.value)}
          style={{ width: "15%", marginRight: 8 }}
          />
          <input
            type="number"
            placeholder="Validity (min)"
            value={field.validity}
            onChange={(e) => handleChange(idx, "validity", e.target.value)}
            style={{ width: "15%" }}
          />
        </div>
      ))}
      {fields.length < 5 && (
        <button type="button" onClick={addField}>
          + Add another URL
        </button>
      )}
      <div style={{ marginTop: 16 }}>
        <button type="submit">Shorten URLs</button>
      </div>
    </form>
  );
};

export default UrlForm;
