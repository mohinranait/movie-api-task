import { useEffect, useState } from "react";
import { getAllMovieLists } from "../../utils/localStorege";
import BookingRows from "../../components/rows/BookingRows";
import './MyBooking.css'

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const getAllBookings = getAllMovieLists();
        setBookings(getAllBookings)
    },[])

    return (
        <div className="container my-4">
            <div className="col-md-8 mx-auto overflow-x-auto">
                <table className="table table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Movie</th>
                            <th scope="col">User</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking,index) => <BookingRows key={index} index={index} booking={booking} />)
                        }
                    </tbody>
                </table>
                {
                    bookings?.length == 0 && <div className="alert">You have not booking any movie</div>
                }
            </div>
        </div>
    );
};

export default MyBooking;