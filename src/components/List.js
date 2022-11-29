import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';


const List = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => {
        console.log(response.data);
        setValue(response.data);
      });
  }, []);

  return (
    <>
    <div className="container">
        <div className="body">
      <table>
        <tbody>
          <tr>
            <th>email</th>
          </tr>
          {value.map((item, index) => (
            <tr key={index}>
              <td>
                <a href={"/" + item.id}>{item.email}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
};

export default List;
