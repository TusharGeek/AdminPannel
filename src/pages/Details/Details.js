import React,{useState, useEffect} from 'react';
import './Details.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useFetch from '../../hooks/usefetch';
import useRazorpay from "react-razorpay";
import paySvg from "./pay.svg";
import { color } from '@mui/system';




const Profile = () => {
   
    const {id} = useParams();
    const {MembershipId} = useParams();


    const Razorpay = useRazorpay();
    const [membership, setMembership ] = useState({});
    const [user, setuser] = useState();
    const navigate = useNavigate();
 
    const {data, loading,refetchData} = useFetch(`http://localhost:8800/api/users/${id}`);
   
    useEffect(async ()=> {
        const membershipData = await  axios.get(`http://localhost:8800/api/membership/${MembershipId}`, {withCredentials: true });
        setMembership(membershipData.data[0]);
    })

    useEffect(() => {
        if(data[0]!=null){
            setuser(data[0]);
        }
    },[data.length] )

    useEffect(()=>{
        refetchData();
    })


    const initPayment = (data) => {
		const options = {
			key: "rzp_test_6DlYKILYqIBT6c",
			amount: data.amount,
			currency: 'INR',
			name: 'Membership',
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
                    console.log(response);
                    response.userId = id;
                    response.membership = membership;
					const verifyUrl = "http://localhost:8800/api/payment/payment-verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data, 'Payment Successfull');
                    navigate('/users')
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new Razorpay(options);
		rzp1.open();
	};
    

    const handlePayment = async () => {
        try {
			const orderUrl = "http://localhost:8800/api/payment/payment-order";
			const { data } = await axios.post(orderUrl, { amount: membership.MembershipPrice});
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
    }


  
    return (
        <div className="App">
        {user&&
            <div className="book_container">
            <img src={paySvg} alt="book_img" className="book_img" />
            <p className="book_name">{user.Name}</p>
            <p className="book_name">Become a <span style={{color:"#f3d172"}}>Member</span></p>
            <p className="book_author"><span>Membership Name:</span> {membership.Name}</p>
            <p className="book_author">Details:</p>
            <p className="book_author"><span>No of Adults: </span>{membership.NoOfAdults}</p>
            <p className="book_author"><span>No of Children: </span>{membership.NoOfChildren}</p>
            <p className="book_author"><span>No of Years: </span>{membership.NoOfYears}</p>
            <p className="book_author"><span>Holidays per Year: </span>{membership.HolidayPerYear}</p>
            <p className="book_price">
                Price : <span>&#x20B9; {membership.MembershipPrice} </span>
            </p>
            <button onClick={handlePayment} className="buy_btn">
                Pay Now
            </button>
        </div>
        }
       
    </div>
    )
}

    
export default Profile;










