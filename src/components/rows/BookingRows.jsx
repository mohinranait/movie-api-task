/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import './BookingRows.css'
const BookingRows = ({index,booking}) => {
    const {name,movieImg,movieName,movieLan,email,phone,movieId    } = booking;
    return (
        <>
            <tr>
                <th scope="row" className='list'>{index+1}</th>
                <td>
                    <div className='moviTd'>
                        <img src={movieImg} alt="" />
                        <div className='about'>
                            <p className='name'>{movieName}</p>
                            <p>Language:{movieLan}</p>
                        </div>
                    </div>    
                </td>
                <td className='userTd'>
                    <div className='userAbout'>
             
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
              
                    </div>
                </td>
                <td className='action'>
                    <Link to={`/movie/${movieId}`} className='btn btn-primary'>View movie</Link>
                </td>
            </tr>
        </>
    );
};

export default BookingRows;