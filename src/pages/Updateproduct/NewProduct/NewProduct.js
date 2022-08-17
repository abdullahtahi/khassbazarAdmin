import React from 'react'
import "./NewProduct.css"
export default function NewProduct() {
  return (
    <div>
       
       <h1 className='pagetitle'>NEW PRODUCT</h1>
        <div className="pagecontent">
        <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Product Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Product Slug</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Price</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Color</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Fabric</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Catagory</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">image</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">hover image</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
        </div>
    </div>
  )
}
