export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src="https://www.svgrepo.com/download/170303/avatar.svg" alt="avatar" />
          {params.row.Name}
        
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230, 
    renderCell: (params) => {
      return (
        <div >
          {params.row.Email}
        </div>
      );
    },
  },
  {
    field: "MobNo",
    headerName: "Mobile Number",
    width: 130, 
    renderCell: (params) => {
      return (
        <div >
          {params.row.MobNo}
        </div>
      );
    },
  },
  {
    field: "DOB",
    headerName: "Date of Birth",
    width: 130, 
    renderCell: (params) => {
      return (
        <div >
          {params.row.DOB}
        </div>
      );
    },
  },
  {
    field: "Address",
    headerName: "Address",
    width: 230, 
    renderCell: (params) => {
      return (
        <div >
          {params.row.Address}
        </div>
      );
    },
  },
  {
    field: "JoiningDate",
    headerName: "Joining Date",
    width: 130, 
    renderCell: (params) => {
      return (
        <div >
          {params.row.JoiningDate}
        </div>
      );
    },
  },
  {
    field: "LeadType",
    headerName: "Lead Type",
    width: 130, 
    renderCell: (params) => {
      return (
        <div >
          {params.row.LeadType}
        </div>
      );
    },
  },
  // {
  //   field: "Active",
  //   headerName: "Active",
  //   width: 100, 
  //   renderCell: (params) => {
  //     return (
  //       <div >
  //         {params.row.isActive}
  //       </div>
  //     );
  //   },
  // },
  
];

export const hotelsColumns = [
  { field: "_id", headerName: "ID", width: 50,
  renderCell: (params) => {
    return (
      <div >
        {params.row.id}
      
      </div>
    );
  }, },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Name}
        
        </div>
      );
    },
  },
  {
    field: "Description",
    headerName: "Description",
    width: 300,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Description}
        
        </div>
      );
    },
  },
  {
    field: "Amenties",
    headerName: "Amenties",
    width: 300,
    renderCell: (params) => {
      return (
        <div>
        {params.row.Amenties}
        </div>
      );
    },
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Type}
        
        </div>
      );
    },
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.City}
        
        </div>
      );
    },
  },
  {
    field: "state",
    headerName: "State",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.State}
        
        </div>
      );
    },
  },
  {
    field: "region",
    headerName: "Region",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Region}
        </div>
      );
    },
  },
];


export const bookingColumns = [
  { field: "_id", headerName: "ID", width: 50,
  renderCell: (params) => {
    return (
      <div >
        {params.row.BookingNo}
      
      </div>
    );
  }, },
  {
    field: "bookingdate",
    headerName: "Booking Date",
    width: 120,
    renderCell: (params) => {
      return (
        <div >
          {params.row.BookingDate}
        
        </div>
      );
    },
  },
  {
    field: "CustomerName",
    headerName: "Customer Name",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.name}
        
        </div>
      );
    },
  },
  {
    field: "hotelName",
    headerName: "Hotel Name",
    width: 170,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Name}
        
        </div>
      );
    },
  },
  {
    field: "State",
    headerName: "State",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.State}
        </div>
      );
    },
  },
  {
    field: "Type",
    headerName: "Type",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Type}
        </div>
      );
    },
  },
  {
    field: "NoOfAdults",
    headerName: "Adults",
    width: 80,
    renderCell: (params) => {
      return (
        <div >
          {params.row.NoOfAdults}
        
        </div>
      );
    },
  },
  {
    field: "NoOfChildren",
    headerName: "Children",
    width: 80,
    renderCell: (params) => {
      return (
        <div >
          {params.row.NoOfChildren}
        
        </div>
      );
    },
  },
  {
    field: "NoOfDays",
    headerName: "No. of Days",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.NoOfDays}
        </div>
      );
    },
  },
  {
    field: "BookingStatus",
    headerName: "Booking Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.BookingStatus}
        </div>
      );
    },
  },
 
];

export const membershipColumns = [
  { field: "id", headerName: "ID", width: 50,
  renderCell: (params) => {
    return (
      <div >
        {params.row.id}
      
      </div>
    );
  }, },
  {
    field: "Name",
    headerName: "Name",
    width: 120,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Name}
        
        </div>
      );
    },
  },
  {
    field: "NoOfAdults",
    headerName: "No Of Adults",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.NoOfAdults}
        
        </div>
      );
    },
  },
  {
    field: "NoOfChildren",
    headerName: "No Of Children",
    width: 170,
    renderCell: (params) => {
      return (
        <div >
          {params.row.NoOfChildren}
        
        </div>
      );
    },
  },
  {
    field: "NoOfYears",
    headerName: "No Of Years",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.NoOfYears}
        </div>
      );
    },
  },
  {
    field: "HolidayPerYear",
    headerName: "Holiday Per Year",
    width: 140,
    renderCell: (params) => {
      return (
        <div >
          {params.row.HolidayPerYear}
        </div>
      );
    },
  },
  {
    field: "MembershipType",
    headerName: "Type",
    width: 80,
    renderCell: (params) => {
      return (
        <div >
          {params.row.MembershipType}
        
        </div>
      );
    },
  },
  {
    field: "MembershipPrice",
    headerName: "Price",
    width: 80,
    renderCell: (params) => {
      return (
        <div >
          {params.row.MembershipPrice}
        
        </div>
      );
    },
  },
 
];

export const paymentColumns = [
  { field: "id", headerName: "ID", width: 250,
  renderCell: (params) => {
    return (
      <div >
        {params.row.id}
      
      </div>
    );
  }, },
  {
    field: "PaymentType",
    headerName: "Payment Type",
    width: 120,
    renderCell: (params) => {
      return (
        <div >
          {params.row.PaymentType}
        
        </div>
      );
    },
  },
  {
    field: "Amount",
    headerName: "Amount",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Amount}
        
        </div>
      );
    },
  },
  {
    field: "Mode",
    headerName: "Mode",
    width: 170,
    renderCell: (params) => {
      return (
        <div >
          {params.row.Mode}
        
        </div>
      );
    },
  },
  {
    field: "PaymentStatus",
    headerName: "Payment Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div >
          {params.row.PaymentStatus}
        </div>
      );
    },
  },
,
  {
    field: "UserId",
    headerName: "User Id",
    width: 80,
    renderCell: (params) => {
      return (
        <div >
          {params.row.UserId}
        
        </div>
      );
    },
  },
];


