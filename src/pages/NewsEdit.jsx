import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams, Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
  fetchNewsById,
  selectSingleNews,
  updateNewsById,
} from '../features/newsSlice';

const NewsEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const newsById = useSelector(selectSingleNews);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setDescription(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateNewsById({
        _id: newsById._id,
        title,
        image,
        category,
        description,
      }),
    );

    toast.success('News Updated Successfully', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });

    navigate('/admin/news');
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
    dispatch(fetchNewsById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (newsById) {
      setTitle(newsById.title);
      setImage(newsById.image);
      setDescription(newsById.description);
      setCategory(newsById.category);
    }
  }, [newsById]);
  return (
    <div className="bg-[#000] pt-28">
      <Link to="/admin/news">
        <button
          className="bg-[#fae115] p-2 rounded-md ml-40  mt-10 mb-10 "
          type="button"
        >
          <h1 className="font-bold">Go Back</h1>
        </button>
      </Link>

      <ToastContainer />
      <div className="bg-[#161616] mx-auto w-[70%] px-10 rounded-lg pb-10">
        <h1 className="text-[#fff] text-center font-bold text-2xl pt-10">
          Edit News
        </h1>
        <div className="flex items-end gap-5 ">
          <div className="flex w-[100%] justify-center md:flex-row gap-5 pt-10">
            <div className="flex flex-col w-full">
              <label
                htmlFor="title"
                className="text-white mb-3 uppercase font-bold"
              >
                title
              </label>
              <input
                type="text"
                id="title"
                name="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </div>
          </div>

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
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center md:flex-row mt-10 gap-5">
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
              className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
            />
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
            <ReactQuill
              value={description}
              onChange={handleChange}
              modules={{
                toolbar: [
                  [{ header: '1' }, { header: '2' }, { font: [] }],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['link'],
                ],
              }}
              formats={[
                'header',
                'font',
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'list',
                'bullet',
                'link',
              ]}
              className="bg-[#161616] text-white rounded-lg p-2 font-medium focus:outline-none"
            />
          </div>
        </div>

        <button
          className="why-btn  w-full mt-20 mb-10 "
          onClick={(e) => submitHandler(e)}
          type="submit"
        >
          <h1 className="font-bold">Update</h1>
        </button>
      </div>
    </div>
  );
};

export default NewsEdit;
