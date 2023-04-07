import React, { useState } from "react";
import Cors from "cors";
import { useRouter } from "next/router";

const cors = Cors();
export default function UploadPage() {
  const route = useRouter();
  const [picture, setPicture] = useState(null);

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    setPicture(file);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("picture", picture);

    const response = await fetch("http://127.0.0.1:5000/api/predict", {
      method: "POST",
      body: formData,
    });
    route.push("/Que");
  }

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          width: "90%",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          transform: "scale(1)",
          opacity: "1",
          transition: "all 0.5s",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Snap a pii</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="picture"
            style={{ fontSize: "1.2rem", marginBottom: "1rem" }}
          >
            Choose a picture:
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureUpload}
              id="picture"
              name="picture"
              style={{ display: "none" }}
            />
            <label
              htmlFor="picture"
              style={{
                border: "2px solid #ccc",
                padding: "1rem 2rem",
                borderRadius: "5px",
                backgroundColor: "#fff",
                color: "#333",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              Select Picture
            </label>
          </div>
          <button
            type="submit"
            style={{
              border: "none",
              backgroundColor: "#333",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "5px",
              marginTop: "1rem",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Upload Picture
          </button>
        </form>
      </div>
    </div>
  );
}
