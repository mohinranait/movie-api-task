import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Checkout.css"
import { setOrderInLocalStorage } from "../../utils/localStorege";
import { toast } from "react-toastify";

const Checkout = () => {
    const [movie, setMovie] = useState({});
    const {id}= useParams();
    const [error,setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data => {
            setMovie(data)
        })
    },[])


    const handleBooking = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        if(!name){
            setError("Name is required");
            return
        }else{
            setError('')
        }
        if(!email){
            setError("Email is required");
            return
        }else{
            setError('')
        }
        if(!phone){
            setError("Phone is required");
            return
        }else{
            setError('')
        }

        const bookObj = {
            name, email, phone,
            movieName: movie?.name,
            movieId : movie?.id,
            movieImg : movie?.image?.medium,
            movieLan : movie?.language
        }

        form.reset();

        
        const res = setOrderInLocalStorage(bookObj)
        if(res){
            toast.success("Booking success")
            navigate('/my-booking')
        }
    }

    return (
        <section className="py-4">
            <div className="container">
                <div className="col-md-6 mx-auto bg-dark rounded p-5">
                    <form onSubmit={handleBooking}>
                        <p className="mb-4 fs-4 fw-bold text-white">Fillup form</p>
                        {
                            error && <div className="error">{error}</div>
                        }
                        <div className="formWrap">
                            <div>
                                <label htmlFor="" className="text-white">Full name</label>
                                <input type="text" name="name" className="form-control " placeholder="Full name" />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white">Email</label>
                                <input type="email" name="email" className="form-control " placeholder="Email" />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white">Phone</label>
                                <input type="number" name="phone" className="form-control" placeholder="Phone" />
                            </div>
                            <div className="d-grid gap-2 mt-4">
                               <button type="submit" className="btn btn-success">Booking confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;