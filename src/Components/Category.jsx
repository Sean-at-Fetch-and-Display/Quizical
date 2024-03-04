import { useContext, useState } from "react";
import { DataContext } from "../App";
import { categoryList } from "../API/Category";
import Button from "./Button";

export default function Category() {
  const { category, setCategory, setCategorySelected } =
    useContext(DataContext);
  const categoryListArray = categoryList[0].results;

  const categoryBtnList = categoryListArray.map((item) => (
    <Button
      key={item.id}
      btnText={item.id}
      className={item.className}
      id={item.id}
      value={item.value}
      onClick={handleCategory}
      style={category == item.value ? styles.buttonActive : null}
    />
  ));

  function handleCategory(e) {
    setCategory(e.target.value);
    setCategorySelected(true);
    console.log(e.target.value);
  }

  return (
    <div>
      <h2 className="category_h3">
        {" "}
        Please select one option from below. <br />
        <span className="down_emoji"></span>{" "}
      </h2>

      <div className="flex-container">{categoryBtnList}</div>
    </div>
  );
}

const styles = {
  buttonActive: {
    border: "2px solid #112a46",
    backgroundColor: "#f16873",
    color: "#112a46",
    cursor: "not-allowed",
    borderRadius: "8px",
  },
};
