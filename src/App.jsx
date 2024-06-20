import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FileDrop from "./components/FileDrop";
import DataTable from "./components/DataTable";

const App = () => {
  const [data, setData] = useState([]);

  const handleFileDrop = (fileData) => {
    setData(fileData);
  };

  return (
    <Container
      className="mt-5 p-4"
      style={{
        backgroundColor: "#343541",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-center mb-4">Resume classification</h1>
      <FileDrop onFileDrop={handleFileDrop} />
      <DataTable data={data} />
    </Container>
  );
};

export default App;
