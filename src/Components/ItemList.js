import React, { useEffect, useState } from 'react';

const ItemList = ({ data, setCheckedItem }) => {
  // console.log(data);
  const [checked, setChecked] = useState([]);

  const clickCheck = (e) => {
    if (e.target.checked) {
      setChecked([...checked, e.target.value]);
    } else {
      setChecked(checked.filter(check => check !== e.target.value));
    }
    // console.log(checked);
  }

  useEffect(() => {
    // console.log(checked);
    setCheckedItem(checked);
  }, [clickCheck])

  return (
    <>
      <ul>
        {data.map((data) => (
          <li key={data.id} style={{ listStyleType: 'none' }}>
            <input type='checkbox' value={data.id} onClick={clickCheck} />{data.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ItemList;