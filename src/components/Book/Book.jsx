import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, author, bookName, review, tags, category, bookId } = book;
  return (
    <Link to={`books/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="bg-cyan-200 py-12 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="gap-8 justify-center flex">
          {tags.map((tag) => (
            <button className="badge badge-soft badge-accent">{tag}</button>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>by : {author}</p>
        <div className="divider"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="rating">
            <div className="mask mask-star" aria-label="1 star"></div>
            <div className="mask mask-star" aria-label="2 star"></div>
            <div
              className="mask mask-star"
              aria-label="3 star"
              aria-current="true"
            ></div>
            <div className="mask mask-star" aria-label="4 star"></div>
            <div className="mask mask-star" aria-label="5 star"></div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
