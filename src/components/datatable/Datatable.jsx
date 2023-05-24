import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/usefetch";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Datatable = ({columns}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const {data, loading,error,refetchData} = useFetch(`http://13.232.188.30:3001/api/${path}`);
  console.log(data);
  
  useEffect(()=>{
  setList(data);
  },[data,data.BookingStatus]);



  const handleAction = async (id,Status) => {

  const BookingStatus = {
    BookingStatus: Status
  }
  try {
    
    await axios.put(`http://localhost:8800/api/${path}/${id}`,BookingStatus,{withCredentials: true});
    refetchData();
    setList(data);
  } catch (error) {
    
  }
  }

 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/${path}/${id}`, {withCredentials: true})
      setList(list.filter((item) => item.id !== id));
    } catch (error) {
    }
   
  };



 const handleView= (id)=>{
 navigate(`/${path}/view/${id}`);
 }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (data) => {
        return (
          <div className="cellAction">
          {path == "booking"&&
          <div className="BookingActionCell">
          <div
              className="acceptButton"
              onClick={() => handleAction(data.id,"Booked")}
            >
              Book
            </div>
            <div
              className="viewButton"
              onClick={() => handleAction(data.id,"Hold")}
            >
              Hold
            </div>
          </div>
          }
      
    {
      path != "payment"&&
      <div style={{display:"flex",gap:"10px"}}>
    <div
              className="viewButton"
              onClick={()=> handleView(data.id)}
            >
            view
            </div>
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(data.id)}
            >
            {path =="booking" ?<p>Cancel</p>:<p>Delete</p> }  
            </div>
    </div>
    }
  
        
          </div>
        );
      },
    },
  ];

  const NewNavigate= ()=> {
    navigate(`/${path}/new/`);
  }
  return (
    <div className="datatable">
      <div className="datatableTitle">
         {path.charAt(0).toUpperCase()+path.slice(1,path.length)}
         {
          path != "payment"&&
          <div onClick={NewNavigate} className="link">
          Add New
        </div>
         }
        
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
       
      />
    </div>
  );
};

export default Datatable;
