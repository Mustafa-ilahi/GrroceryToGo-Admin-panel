import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { db } from "../../config/firebase";
import Header from "../Header";
import "./venderDashboard.css";
export default function VenderDashboard() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let temp = [];
    db.collection("Products")
      .get()
      .then((doc) => {
        doc.forEach((item) => {
          temp.push(item.data());
        });
        setProduct(temp);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-3">
        <h3 className="text-center your-products">Your Products</h3>
      </div>
      {product?.length &&
        product.map((item, index) => {
          return (
            <div className="container products" key={index}>
              <ul
                className="container"
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src={item.allFiles[0]}
                    className="img-fluid"
                    style={{ height: 170 }}
                  />
                </div>
                <div>
                  <li>Product Title: {item.title} </li>

                  {/* <li>{item.description}</li> */}
                  <li>Product Price: ${item.price}</li>
                </div>
              </ul>
            </div>
          );
        })}
      {/* <Button className="signInBtn" onClick={() => navigate("/addProduct")}>
          Add New Product
        </Button> */}
    </div>
  );
}
