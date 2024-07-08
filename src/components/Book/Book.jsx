import React from 'react';
import { useParams } from 'react-router-dom';
import { rooms } from '../Home/Home'

const Book = () => {
    const { bedType } = useParams();
    rooms.find(i => i.bedType === rooms.bedType)
    return (
        <div>
            <h3>Lets Book {bedType} based room.</h3>
        </div>
    );
};

export default Book;