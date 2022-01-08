import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ["cat1", "cat2", "cat3"];

  const [categories, setCategories] = useState(["categoria 1"]);

  const handleAdd = () => {
    let count = categories.length;
    setCategories([...categories, "Hola " + count]);
  };

  return (
    <>
      <h2>Gif Expert</h2>
      <AddCategory setInCategories={setCategories} />
      <hr />
      <div>
        <ol>
          {categories.map((item) => (
            <GifGrid key={item} category={item} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifExpertApp;
