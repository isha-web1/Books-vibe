import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const {booksId} = useParams()
    return (
        <div>
            <h1>this is book details page</h1>
        </div>
    );
};

export default BookDetails;