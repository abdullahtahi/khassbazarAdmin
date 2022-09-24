import React, { useEffect, useState } from "react";
import "./NewProduct.css";
import axios from "axios";
import { storage, db } from "../Component/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Grid from "@mui/material/Grid";
import { collection, addDoc } from "firebase/firestore";
export default function NewProduct() {
  const [productname, setproductname] = useState();
  const [productslug, setproductslug] = useState();
  const [description, setdescription] = useState();
  const [price, setprice] = useState();
  const [color, setcolor] = useState();
  const [fabrics, setfabrics] = useState();
  const [catagorys, setcatagorys] = useState();
  const [image, setimage] = useState([]);
  console.log(image);
  const UploadImage = async (e) => {
    try {
      const value = e.target.files;
      const formdata = new FormData();

      for (let index = 0; index < value.length; index++) {
        let element = value[index];
        formdata.append("photo", element);
        const { data } = await axios.post(
          "http://localhost:5000/khassbazzarproduct/newproductimg",
          formdata
        );
        setimage(data.newproduct.image);
        // debugger;
      }

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("/////////", image);
  const handlesignup = async (e) => {
    e.preventDefault();
    try {
      const config = {
        header: {
          "Content-type": "multipart/form-data",
        },
      };
      // await axios.post("http://localhost:5000/khassbazzarproduct/newproductimg",formData
      // productname:productname,
      // productslug:productslug,
      // description:description,
      // price:price,
      // color:color,
      // fabric:fabrics,
      // catagory:catagorys,
      // imag2:formData2

      // ,config)
      debugger;
      const { data } = await axios.post(
        "http://localhost:5000/khassbazzarproduct/newproduct",
        {
          productname: productname,
          productslug: productslug,
          description: description,
          price: price,
          color: color,
          fabric: fabrics,
          catagory: catagorys,
          img: image,
        },
        config
      );
      debugger;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container>
      <form
        style={{
          marginLeft: "5rem",
        }}
        onSubmit={handlesignup}
        encType="multipart/form-data"
      >
        <Grid>
          <label
            style={{
              marginTop: "10rem",
            }}
            for="inputPassword"
          >
            Product Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputPassword"
            onChange={(e) => {
              setproductname(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <label for="inputPassword">Product Slug</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword"
            onChange={(e) => setproductslug(e.target.value)}
          />
        </Grid>
        <Grid>
          <label for="inputPassword">Description</label>

          <input
            type="text"
            class="form-control"
            id="inputPassword"
            onChange={(e) => setdescription(e.target.value)}
          />
        </Grid>
        <Grid>
          <label for="inputPassword">Price</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword"
            onChange={(e) => setprice(e.target.value)}
          />
        </Grid>
        <Grid>
          <label for="inputPassword">Color</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword"
            onChange={(e) => setcolor(e.target.value)}
          />
        </Grid>
        <Grid>
          <label for="inputPassword">Fabric</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword"
            onChange={(e) => setfabrics(e.target.value)}
          />
        </Grid>
        <Grid>
          <label for="inputPassword">Catagory</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword"
            onChange={(e) => setcatagorys(e.target.value)}
          />
        </Grid>
        <Grid class="mb-3">
          <label for="formFile">Image</label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={(e) => UploadImage(e)}
            multiple="multiple"
          />
        </Grid>
        {/* <Grid class="mb-3">
          <label for="formFile" class="form-label">
            hover image
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={(e) => setfile1(e.target.files[0])}
          />
        </Grid> */}
        <Grid>
          <input
            type="submit"
            value="New product"
            className="btn btn-success"
          />
        </Grid>
      </form>
    </Grid>
  );
}
