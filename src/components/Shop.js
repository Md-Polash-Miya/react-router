import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const url = "https://fortnite-api.theapinetwork.com/store/get";
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setItems(data.data);
  };

  return (
    <div>
      {items.map((item) => (
        <h3 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name} </Link>
        </h3>
      ))}
    </div>
  );
};

export default Shop;
