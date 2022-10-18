import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Fetchdata = () => {
  // eslint-disable-next-line no-unused-vars
  const [myData, SetMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => (console.log(res.data))
      )
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <div>
      {myData.map((post)=> {
        const {id, title, description } = post;
        return <div className="card d-block text-center text-blue" key={id}>
        <h2>{title}</h2>
        <p>{description}</p>

        </div>
      })};
    </div>
  );
};

export default Fetchdata;

// const Getmethod = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => {
//         console.log(response);
//         SetPost(response.data.id + "...." + response.data.title);
//       });
//   };
