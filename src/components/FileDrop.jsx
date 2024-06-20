import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card, Spinner } from "react-bootstrap";
import axios from "axios";
import pdfToText from "react-pdftotext";

const FileDrop = ({ onFileDrop }) => {
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setLoading(true);

      pdfToText(file)
        .then(async (text) => {
          console.log(text);

          try {
            const response = await axios.get("http://localhost:5000/process", {
              params: { content: text },
            });

            if (response.status === 201) {
              console.log("API response:", response.data);

              const transformedData = Object.keys(response.data).map((key) => ({
                role: key,
                percent: response.data[key],
              }));

              onFileDrop(transformedData);
            } else {
              console.error("Failed to process file content:", response);
            }
          } catch (error) {
            console.error("Error calling API:", error);
          } finally {
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error("Failed to extract text from pdf", error);
          setLoading(false);
        });
    },
  });

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      <Card
        {...getRootProps()}
        className="p-4 mb-3"
        style={{ border: "2px dashed #007bff", cursor: "pointer" }}
      >
        <input {...getInputProps()} />
        <p className="text-center">
          Drag 'n' drop some files here, or click to select files
        </p>
      </Card>
    </>
  );
};

export default FileDrop;
