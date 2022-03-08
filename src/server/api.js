// import axios from "axios";



// export const optGetHandler = (data, callback) => {
//     axios({
//       url: `https://stage-services.truemeds.in/CustomerService/sendOtp?mobileNo=${data.phonenumber}`,
//       method: "PUT",
//       data: {
//         ...data,
//       },
//       headers: "react_interview"
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           callback(null, response);
//         } else {
//           callback(null, response);
//         }
//       })
//       .catch((error) => {
//         console.log("Add comment Error: ", error.response);
//         callback(new Error(error.response.data.message));
//       });
//   };