import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams, Link } from 'react-router-dom';

// import axios from 'axios';
// import { selectUser } from '../features/userSlice';

import {
  fetchProduct,
  selectProduct,
  updateProductById,
} from '../features/productSlice';

const ProductEdit = () => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateProductById({
        _id: product._id,
        name,
        price,
        image,
        category,
        brand,
        countInStock,
        description,
      }),
    );

    toast.success('Product Updated Successfully', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });

    navigate('/admin/products');
  };
  // const user = useSelector(selectUser);

  const uploadFileHandler = (files) => {
    const formData = new FormData();

    formData.append('file', files[0]);
    formData.append('upload_preset', 'e2e6z2lx');
    setUploading(true);
    fetch('https://api.cloudinary.com/v1_1/dakiak4mc/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUploading(false);
        setImage(data.secure_url);
      });
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setBrand(product.brand);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);
  return (
    <div className="bg-[#000] pt-28">
      <Link to="/admin/products">
        <button className="why-btn ml-40  mt-10 mb-10 " type="button">
          <h1 className="font-bold">Go Back</h1>
        </button>
      </Link>

      <ToastContainer />
      <div className="bg-[#161616] mx-auto w-[50%] px-10 rounded-lg pb-10">
        <h1 className="text-[#fff] text-center font-bold text-2xl pt-10">
          Edit Product
        </h1>
        <div className="flex gap-5">
          <div className="flex w-[100%] justify-center md:flex-row gap-5 pt-10">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="text-white mb-3 uppercase font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="email"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name.."
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </div>
          </div>
          <div className="flex w-[100%] justify-center md:flex-row gap-5 pt-10">
            <div className="flex flex-col w-full">
              <label
                htmlFor="price"
                className="text-white mb-3 uppercase font-bold"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-end">
          <div className="flex w-[100%] justify-center md:flex-row mt-10 gap-5">
            <div className="flex flex-col w-full">
              {uploading ? (
                <div className="flex justify-center items-center pt-28">
                  <div className="w-20 h-20 rounded-full animate-spin border-2 border-solid border-[#fae115] border-t-transparent" />
                </div>
              ) : (
                <img src={image} alt="" className="h-20 w-20" />
              )}
              <label
                htmlFor="image"
                className="text-white mb-3 uppercase font-bold"
              >
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                id="image"
                onChange={(e) => uploadFileHandler(e.target.files)}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </div>
          </div>

          <div className="flex w-[100%] justify-center md:flex-row mt-10 gap-5">
            <div className="flex flex-col w-full">
              <label
                htmlFor="category"
                className="text-white mb-3 uppercase font-bold"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Short, Jersey, Pants, etc.."
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex w-[100%] justify-center md:flex-row mt-10 gap-5">
            <div className="flex flex-col w-full">
              <label
                htmlFor="brand"
                className="text-white mb-3 uppercase font-bold"
              >
                Type
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={brand}
                placeholder="Home, Away, Third, etc.."
                onChange={(e) => setBrand(e.target.value)}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </div>
          </div>

          <div className="flex w-[100%] justify-center md:flex-row mt-10 gap-5">
            <div className="flex flex-col w-full">
              <label
                htmlFor="countInStock"
                className="text-white mb-3 uppercase font-bold"
              >
                Count In Stock
              </label>
              <input
                type="number"
                id="countInStock"
                name="countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="description"
              className="text-white mb-3 uppercase font-bold"
            >
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#fae115]"
            />
          </div>
        </div>

        <button
          className="why-btn  w-full mt-10 mb-10 "
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          <h1 className="font-bold">Update</h1>
        </button>
      </div>
    </div>
  );
};

export default ProductEdit;
