import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
  console.log("ItemList");
  console.log(data);
  return (
    <>
      <Item data={data} />
    </>
  )
}

export default ItemList;