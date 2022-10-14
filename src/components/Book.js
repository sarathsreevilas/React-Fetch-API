import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <div>
      {data.map((datas) => (
        <div className="d-inline-flex">
          <Card
            className="shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <Card.Img src={datas.show.image.medium} />
            <Card.Body>
              <Card.Title>
                <strong>{datas.show.name}</strong>
              </Card.Title>
              <Card.Title>{datas.show.type}</Card.Title>
              <Card.Text>{datas.show.genres}</Card.Text>
              <Button
                variant="primary"
                onClick={()=>navigate("/booking")}
              >
                Book my Ticket
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Book;
