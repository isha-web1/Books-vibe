import React, { useEffect, useState } from 'react';


const Books = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(error => console.error('Error fetching books:', error));
    },[])

    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Books</h1>
            <p>{books.length}</p>
        </div>
    );
};

export default Books;