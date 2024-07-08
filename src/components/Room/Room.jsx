import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import WcIcon from '@mui/icons-material/Wc';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Room = (props) => {

    const { title, description, imgUrl, bed, capacity, price, bedType } = props.room;
    const navigate = useNavigate()
    return (
        <div style={{ marginRight: '5px' }}>
            <Card sx={{ maxWidth: 270, height: 400 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imgUrl}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <SingleBedIcon /> {bed}
                    <WcIcon /> {capacity}
                    <AttachMoneyIcon /> {`: ${price}`}
                    <Button onClick={() => navigate('/book/' + bedType)} variant='contained' size="small">Book</Button>
                </CardActions>
            </Card>
        </div>
    );

};
Room.propTypes = {
    room: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        imgUrl: PropTypes.string.isRequired,
        bed: PropTypes.number.isRequired,
        capacity: PropTypes.number.isRequired,
        bedType: PropTypes.string,
        avatar: PropTypes.string,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default Room;