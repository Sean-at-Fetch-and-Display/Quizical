import { useContext, useState } from "react";
import { DataContext } from "../App";
import Button from "./Button";

export default function Quantity() {
  const { quantity, setQuantity, setQuantitySelected } =
    useContext(DataContext);

  function handleQuantity(e) {
    setQuantity(e.target.value);
    setQuantitySelected(true);
    console.log(e.target.value);
  }

  return (
    <>
      <div>
        <h2>
          {" "}
          Please select how many questions. <br />{" "}
          <span className="down_emoji"></span>{" "}
        </h2>

        <div className="button_display">
          <Button
            className={"button_circle"}
            btnText="5"
            id="5"
            name="quantity"
            value="5"
            onClick={handleQuantity}
            type="button"
            style={quantity == "5" ? styles.buttonActive : null}
          />

          <Button
            className={"button_circle"}
            btnText="10"
            id="10"
            name="quantity"
            value="10"
            onClick={handleQuantity}
            type="button"
            style={quantity == "10" ? styles.buttonActive : null}
          />

          <Button
            className={"button_circle"}
            btnText="15"
            id="15"
            name="quantity"
            value="15"
            onClick={handleQuantity}
            type="button"
            style={quantity == "15" ? styles.buttonActive : null}
          />

          <Button
            className={"button_circle"}
            btnText="20"
            id="20"
            name="quantity"
            value="20"
            onClick={handleQuantity}
            type="button"
            style={quantity == "20" ? styles.buttonActive : null}
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  buttonActive: {
    border: "2px solid #112a46",
    backgroundColor: "#f16873",
    color: "#112a46",
    cursor: "not-allowed",
    borderRadius: "50%",
    boxShadow: "0px 0px 10px 0px grey",
  },
};

/*

 <ul className="choices" onChange={handleQuantity}>
          <li>
            <input
              type="radio"
              id="5"
              name="quantity"
              value="5"
              className="quantity"
              defaultChecked={quantity == "5" ? true : false}
            />
            <label htmlFor="5"> 5 </label>
          </li>
          <li>
            <input
              type="radio"
              id="10"
              name="quantity"
              value="10"
              className="quantity"
              defaultChecked={quantity == "10" ? true : false}
            />
            <label htmlFor="10"> 10 </label>
          </li>
          <li>
            <input
              type="radio"
              id="15"
              name="quantity"
              value="15"
              className="quantity"
              defaultChecked={quantity == "15" ? true : false}
            />
            <label htmlFor="15"> 15 </label>
          </li>
          <li>
            <input
              type="radio"
              id="20"
              name="quantity"
              value="20"
              className="quantity"
              defaultChecked={quantity == "20" ? true : false}
            />
            <label htmlFor="20"> 20 </label>
          </li>
        </ul>
        
*/
