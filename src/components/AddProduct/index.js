import React, { useState } from "react";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import logo from "../../assets/logo2.png";
import './addProduct.css'
export default function AddProduct() {
  const [loader, setLoader] = useState(false);
  const [dropdownOpen, setOpen] = useState();
  const [role, setRole] = useState("Select Category");

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center text-center main-login-div">
        <div className=" login-div">
          <img src={logo} className="img-fluid groceryIcon" />
          <Form>
            {/* <br /> */}
            <Label className="login-text">Add Product Details</Label>

            <FormGroup className="labelText">
              <Label className="login-text">*Title</Label>
              <Input
                type="text"
                placeholder="Enter Product Title"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="labelText">
              <Label className="login-text">*Description</Label>
              <Input
                type="text"
                placeholder="Enter Description"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>{" "}
            <FormGroup className="labelText">
              <Label className="login-text">*Price</Label>
              <Input
                type="number"
                placeholder="Enter Price"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="labelText">
              <Label className="login-text">*Upload Image</Label>
              <Input
                type="file"
                multiple
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup style={{ textAlign: "left" }}>
              <Label for="examplePassword" className="login-text">
                *Category &nbsp; &nbsp;
              </Label>
              <ButtonDropdown
                toggle={() => {
                  setOpen(!dropdownOpen);
                }}
                isOpen={dropdownOpen}
              >
                <DropdownToggle
                  style={{
                    backgroundColor: "#ff5621",
                    color: "#fff",
                    fontFamily: "Poppins-Regular",
                  }}
                  caret
                >
                  {role}
                </DropdownToggle>

                <DropdownMenu
                  style={{ textAlign: "center", fontFamily: "Poppins-Regular" }}
                >
                  <DropdownItem onClick={() => setRole("Fruits")}>
                    Fruits
                  </DropdownItem>
                  <DropdownItem onClick={() => setRole("Vegie")}>
                    Vegie
                  </DropdownItem>
                  <DropdownItem onClick={() => setRole("Dairy")}>
                    Dairy
                  </DropdownItem>
                  <DropdownItem onClick={() => setRole("Meat")}>
                    Meat
                  </DropdownItem>
                  <DropdownItem onClick={() => setRole("Seafood")}>
                    Seafood
                  </DropdownItem>{" "}
                  <DropdownItem onClick={() => setRole("Cleaning")}>
                    Cleaning
                  </DropdownItem>
                  <DropdownItem onClick={() => setRole("Dessert")}>
                    Dessert
                  </DropdownItem>
                  <DropdownItem onClick={() => setRole("Oils")}>
                    Oils
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </FormGroup>
            <Button
            className="add-product-btn"
            // onClick={adminSignIn}
            >
              {loader ? (
                <Spinner animation="border" variant="light" size="sm" />
              ) : (
                "Add Product"
              )}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
