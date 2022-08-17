import React,{useEffect, useState} from 'react'
import "./NewProduct.css"
import axios from "axios"
import  {storage,db} from "../Component/firebase"
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 
export default function NewProduct() {
  const [file1,setfile1]=useState({})
const [getimg,setgetimg]=useState({})



useEffect(() => {
    const filename= new Date().getTime()+file1.name
    const stringname=filename.toString()
    const storageRef = ref(storage,stringname);
    const uploadTask = uploadBytesResumable(storageRef, file1);
    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
          default:
              break;
      }
    }, 
    (error) => {
      console.log(error)
    }, 
    () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        // console.log('File available at', downloadURL);
        setgetimg(downloadURL)
      });
    }
  );
  

}, [file1])
// console.log("the firbase file is",getimg)
 const [productname,setproductname]=useState()
 const [productslug,setproductslug]=useState()
 const [description,setdescription]=useState()
 const [price,setprice]=useState()
 const [color,setcolor]=useState()
 const [fabrics,setfabrics]=useState()
 const [catagorys,setcatagorys]=useState()
 const [image,setimage]=useState()
 const [hovimage,sethovimage]=useState()
   
useEffect(() => {try{
  
  const docRef =addDoc(collection(db,"img"), {
    img:getimg
   });
   console.log("Document written with ID: ", docRef.id);
}catch(error){

}
}, [])



 const handlesignup=async(e)=>{
e.preventDefault();
try {

// let formData=new FormData();
// // formData.append("key(photo(jo ma na nodejs ma name raka ha wo yaha ana ha))","value(state jis ma value ha)")

// // let newArr = [];
// for (let i = 0; i < 3; i++) {
//     formData.append("photo",image[i]) 
//     // console.log(image[i])
// };
    const config={
        header:{
            "Content-type":"multipart/form-data"
        }
    }
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
const {data}=await axios.post("http://localhost:5000/khassbazzarproduct/newproduct",{
    productname:productname,
    productslug:productslug,
    description:description,
    price:price,
    color:color,
    fabric:fabrics,
    catagory:catagorys,
    img:getimg
},config)
console.log(getimg)

} catch (error) {
   console.log(error) 
}
}
 
 
 return (
    <div>
       
       <h1 className='pagetitle'>NEW PRODUCT</h1>
     <form onSubmit={handlesignup} encType="multipart/form-data">
        <div className="pagecontent">
        <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Product Name</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control" 
      id="inputPassword"
      onChange={(e)=>{setproductname(e.target.value)}}
      />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Product Slug</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control" 
      id="inputPassword"
      onChange={(e)=>setproductslug(e.target.value)}/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control" 
      id="inputPassword"
      onChange={(e)=>setdescription(e.target.value)}
      />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Price</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control" 
      id="inputPassword"
      onChange={(e)=>setprice(e.target.value)}/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Color</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control" 
      id="inputPassword"
      onChange={(e)=>setcolor(e.target.value)}/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Fabric</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control" 
      id="inputPassword"
      onChange={(e)=>setfabrics(e.target.value)}/>
    </div>
  </div>
  <div class="mb-3 row">
    <label 
    for="inputPassword" class="col-sm-2 col-form-label">Catagory</label>
    <div class="col-sm-10">
      <input 
      type="text" 
      class="form-control" 
      id="inputPassword"
      onChange={(e)=>setcatagorys(e.target.value)}/>
    </div>
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">image</label>
  <input 
  class="form-control" 
  type="file" id="formFile"
  onChange={(e)=>setimage(e.target.files)}
  multiple='multiple'
  />
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">hover image</label>
  <input 
  class="form-control" 
  type="file" 
  id="formFile"
  onChange={(e)=>setfile1(e.target.files[0])}
  />
</div>
<input type="submit" value="New product" className='btn btn-success'/>
        </div>
        </form>
    </div>
  )
}
