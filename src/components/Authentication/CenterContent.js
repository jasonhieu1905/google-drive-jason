import React from "react";
import { Container } from "react-bootstrap";

function CenterContent({children}) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
          {children}
      </div>
    </Container>
  );
}

export default CenterContent;
