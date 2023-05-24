import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
       <div style={{textAlign:"center", margin:"50px"}}>
       <h1>Welcome Back!</h1>
        <h1>FileShareIn Admin Pannel</h1>
       </div>
       
      </div>
    </div>
  );
};

export default Home;
