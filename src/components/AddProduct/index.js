import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { db, storage } from "../../config/firebase";
import "./addProduct.css";
export default function AddProduct() {
  const [loader, setLoader] = useState(false);
  const [dropdownOpen, setOpen] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("Select Category");
  const [files, setFiles] = useState();
  const navigate = useNavigate();

  const addProduct = async () => {
    setLoader(true);
    if (title && description && price && category !== "Select Category") {
      const allFiles = [];
      const imgName = [];
      for (let i = 0; i < files.length; i++) {
        imgName.push(files[i].name);
        let file = files[i];
        const storageRef = storage.ref(`products/${file.name}`);
        await storageRef.put(file);
        const url = await storageRef.getDownloadURL();
        allFiles.push(url);
        setLoader(false);
      }
      addProductDB(title, description, price, imgName, allFiles, category);
    } else if (!title) {
      setLoader(false);
      return toast.error("Please Enter Title");
    } else if (!description) {
      setLoader(false);
      return toast.error("Please Enter Description ");
    } else if (!price) {
      setLoader(false);
      return toast.error("Please Enter Price ");
    } else if (!files) {
      setLoader(false);
      return toast.error("Please Upload Product Image ");
    } else if (category === "Select Category") {
      setLoader(false);
      return toast.error("Please Select Category ");
    }
  };
  const addProductDB = (
    title,
    description,
    price,
    imgName,
    allFiles,
    category
  ) => {
    // alert("Andr wala chala ha------->");
    db.collection("Products")
      .add({ title, description, price, imgName, allFiles, category })
      .then(() => {
        navigate("/venderDashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="labelText">
              <Label className="login-text">*Description</Label>
              <Input
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>{" "}
            <FormGroup className="labelText">
              <Label className="login-text">*Price</Label>
              <Input
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="labelText">
              <Label className="login-text">*Upload Image</Label>
              <Input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
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
                  {category}
                </DropdownToggle>

                <DropdownMenu
                  style={{ textAlign: "center", fontFamily: "Poppins-Regular" }}
                >
                  <DropdownItem onClick={() => setCategory("Fruits")}>
                    Fruits
                  </DropdownItem>
                  <DropdownItem onClick={() => setCategory("Vegie")}>
                    Vegie
                  </DropdownItem>
                  <DropdownItem onClick={() => setCategory("Dairy")}>
                    Dairy
                  </DropdownItem>
                  <DropdownItem onClick={() => setCategory("Meat")}>
                    Meat
                  </DropdownItem>
                  <DropdownItem onClick={() => setCategory("Seafood")}>
                    Seafood
                  </DropdownItem>{" "}
                  <DropdownItem onClick={() => setCategory("Cleaning")}>
                    Cleaning
                  </DropdownItem>
                  <DropdownItem onClick={() => setCategory("Dessert")}>
                    Dessert
                  </DropdownItem>
                  <DropdownItem onClick={() => setCategory("Oils")}>
                    Oils
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </FormGroup>
            <Button className="add-product-btn" onClick={addProduct}>
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
