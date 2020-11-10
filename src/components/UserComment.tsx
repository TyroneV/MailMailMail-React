import React from "react";
import { Card, Image } from "react-bootstrap";

export const UserComment: React.FC = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Image src="/defaultImage.svg" width="50" height="50" rounded />
          <h6 className="m-2 d-inline">Author</h6> Nice post
        </Card.Body>
      </Card>
    </>
  );
};
