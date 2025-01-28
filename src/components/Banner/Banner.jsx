import React from "react";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen gap-2">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
          
          <button className="btn btn-primary my-8">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
