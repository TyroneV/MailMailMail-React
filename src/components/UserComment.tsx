import React from "react";
import { Card } from "react-bootstrap";

export const UserComment: React.FC = () => {
  return (
      <>
    <Card>
      <Card.Body>
        <img src="/defaultImage.svg" width="50" className="m-2 d-inline" />
        <h6 className="m-2 d-inline">Author</h6> Nice post
      </Card.Body>
    </Card>
    </>
  );
};
