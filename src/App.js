import React from "react";
import Card from "./components/Card/Card";

function App() {
  return(
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card content={{
              imageUrl: "http://placekitten.com/g/300/200",
              title: "First post",
              published: "11 Sep, 2022",
            }}
            />
          </div>
          <div className="col-md-4">
            <Card content={{
              imageUrl: "http://placekitten.com/300/200",
              title: "Second post",
              published: "4 Aug, 2020",
            }}
            />
          </div>
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "Third post",
                published: "09 Dec, 2019",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;