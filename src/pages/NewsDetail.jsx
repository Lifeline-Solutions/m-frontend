import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://mbackend-65aa08f37e31.herokuapp.com/api/news/${id}`,
      );
      const data = await res.json();
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div className="shadow-md">
      <div className="p-6 bg-[#FAE115] font-bold uppercase md:text-3xl text-3xl flex justify-between ">
        <p className="truncate w-[90%]">
          NEWS |
          {' '}
          {' '}
          {news.title}
        </p>
      </div>

      <div className="sm:w-[200px] md:w-[60%] lg:max-w-full xl:max-w-full mx-auto mt-[6px]">
        <div className="w-[100%]">
          <img src={news.image} alt="" className="w-full h-[600px]" />
          <p className="text-semibold text-white mt-2 absolute top-80 right-100 bg-[#D9D9D9]">
            {news.created_at}
          </p>
        </div>
        <h2 className="text-2xl font-bold mt-4 mr-3 m-4">{news.category}</h2>
        <h3 className="text-xl font-semibold m-4">{news.title}</h3>
        <p
          className="text-lg mt-2 p-4"
          dangerouslySetInnerHTML={{ __html: news.description }}
        />
      </div>
    </div>
  );
};

export default NewsDetail;
