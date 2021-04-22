import React from 'react';

const Item = ({ data }) => {
  console.log("Item");
  console.log(data);
  return (
    <>
      <ul>
        {data.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </>
  )
}

export default Item;