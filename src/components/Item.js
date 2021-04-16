import React, { useState, useEffect } from "react";

const Item = ({ match }) => {
  const [item, setItem] = useState({
    images: {},
  });

  const url = `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;
  const fetchData = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setItem(result.data.item);
    console.log(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>{item.name}</h2>
      <img className="item-image" src={item.images.icon} alt="here an image" />
      <h3>{item.description}</h3>
    </div>
  );
};

export default Item;
