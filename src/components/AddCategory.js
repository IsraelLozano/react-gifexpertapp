import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setInCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChane = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setInCategories((cat) => [inputValue, ...cat]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChane} />
      </form>
    </>
  );
};
AddCategory.propTypes = {
  setInCategories: PropTypes.func.isRequired,
};
export default AddCategory;
