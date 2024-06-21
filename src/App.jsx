import React, { useState } from "react";
import { Container } from "react-bootstrap";
import FileDrop from "./components/FileDrop";
import DataTable from "./components/DataTable";

const App = () => {
  const [data, setData] = useState([]);

  const handleFileDrop = (fileData) => {
    setData(fileData);
  };

  // const fakeData = [
  //   { role: "Advocate", percent: "45.0" },
  //   { role: "Arts", percent: "40.0" },
  //   { role: "Automation Testing", percent: "100.0" },
  //   { role: "Blockchain", percent: "0.0" },
  //   { role: "Business Analyst", percent: "0.0" },
  //   { role: "Civil Engineer", percent: "0.0" },
  //   { role: "Data Science", percent: "0.0" },
  //   { role: "Database", percent: "0.0" },
  //   { role: "DevOps Engineer", percent: "0.0" },
  //   { role: "DotNet Developer", percent: "0.0" },
  //   { role: "ETL Developer", percent: "0.0" },
  //   { role: "Electrical Engineering", percent: "0.0" },
  //   { role: "HR", percent: "0.0" },
  //   { role: "Hadoop", percent: "0.0" },
  //   { role: "Health and fitness", percent: "4.0" },
  //   { role: "Java Developer", percent: "0.0" },
  //   { role: "Mechanical Engineer", percent: "0.0" },
  //   { role: "Network Security Engineer", percent: "0.0" },
  //   { role: "Operations Manager", percent: "0.0" },
  //   { role: "PMO", percent: "0.0" },
  //   { role: "Python Developer", percent: "10.9" },
  //   { role: "SAP Developer", percent: "0.0" },
  //   { role: "Sales", percent: "0.0" },
  //   { role: "Testing", percent: "0.0" },
  //   { role: "Web Designing", percent: "0.0" },
  // ];

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
