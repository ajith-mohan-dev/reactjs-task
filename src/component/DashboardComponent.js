import React from "react";
import "./styles.css";

const data = [
  {
    title: "Header",
    content:
      "some quick example text to build on the card title and make up the bulk of the cards content",
  },
  {
    title: "Header",
    content:
      "some quick example text to build on the card title and make up the bulk of the cards content",
  },
];

const DashboardComponent = () => {
  return (
    <div className="container">
      <div className="block1">
        <div className="groupContainer">
          <button className="button">Group1</button>
        </div>
        {data &&
          data.map((item, index) => {
            return (
              <div className="content">
                <h2>{item.title}</h2>
                <hr />
                <p>{item.content}</p>
              </div>
            );
          })}
        <div className="buttonContainer">
          <button className="button">Add</button>
        </div>
      </div>
      <div className="block2">
        <div className="groupContainer">
          <button className="button">Group2</button>
        </div>
        {data &&
          data.map((item, index) => {
            return (
              <div className="content">
                <h2>{item.title}</h2>
                <hr />
                <p>{item.content}</p>
              </div>
            );
          })}
        <div className="buttonContainer">
          <button className="button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
