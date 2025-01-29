import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../utils/AddToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data?.find((book) => book.bookId === id);
  const {
    image,
    bookId: currentId,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating
  } = book;

  const handleMarkAsRead = (id) => {
   addToStoredReadList(id);
  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl h-[366px]"
        />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-2">
          by : {author}
          </p>
          <div className="divider"></div>
          <p className="py-2">
           {category}
          </p>
          <div className="divider"></div>
          <p>{review}</p>
          <div className="gap-8 justify-center flex my-6">
          {tags.map((tag, idx) => (
             <button key={idx} className="badge badge-soft badge-accent"> {tag}</button>
          ))}
        </div>
        <p>number of page :       {totalPages}</p>
        <p>publisher :       {publisher}</p>
        <p>yearOfPublishing :       {yearOfPublishing}</p>
        <p>rating :       {rating}</p>
          <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-primary mr-3">Mark as Read</button>
          <button className="btn btn-accent">Wish list</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
