import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  let { id } = useParams();
  const [value, setValue] = useState([]);
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => {
        console.log(response.data);
        setValue(response.data);
      });
  }, [id]);

  return (
    <>
      <div>
        <h1>{value?.id}</h1>
        {value?.email}
      </div>
      <br></br>
      <br></br>
      <a href="/">back</a>
    </>
  );
};

export default Show;
