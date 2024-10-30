import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { rooms } from '../Home/Home'
import { UserContext } from '../../App';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dayjs from 'dayjs';
import Button from '@mui/material/node/Button';




const Book = () => {
    const [value, setValue] = useState(dayjs('2022-04-17'));

    const { bedType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    rooms.find(i => i.bedType === rooms.bedType)
    return (
        <div>
            <br />
            <h3>Hello, {loggedInUser.name}! Lets Book {bedType} based room.</h3>
            <p>Want a <Link to='/home' >different room</Link>? </p>


            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
                    <DatePicker
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoContainer>
                <Button variant='contained' color='primary'>Book Now</Button>
            </LocalizationProvider>


        </div>
    );
};

export default Book;