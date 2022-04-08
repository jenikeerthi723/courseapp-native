// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [login, setLogin] = useState({
//     name: "",
//     password: "",
//     defaultpassword: "aa",
//     defaultUsername: "aa",
//   });
//   const inputhandler = (e) => {
//     const { name, value } = e.target;
//     setLogin((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };
//   const submitHandle = (e) => {
//     e.preventDefault();
//     if((login.name===login.defaultUsername)&&(login.password===login.defaultpassword)){
//         navigate("/")

//     }
//   };
//   return (
//     <div>
//       <form onSubmit={submitHandle}>
//         <input
//           type="text"
//           name="name"
//           value={login.name}
//           onChange={inputhandler}
//         />
//         <input
//           type="password"
//           name="password"
//           value={login.password}
//           onChange={inputhandler}
//         />
//         <button onSubmit="submit">loin</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
