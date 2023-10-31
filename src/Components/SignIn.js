// import superLogo from "../Assests/Superapp.png"
// import { useState } from "react"
// import { Link } from "react-router-dom"

// const SignIn = () => {

//     const [userRegister, setUserRegister] = useState({
//         name: "",
//         userName: "",
//         email: "",
//         phone: ""
//     })

//     const [nameError, setNameError] = useState(false)
//     const [userNameError, setUserNameError] = useState(false)
//     const [emailError, setEmailError] = useState(false)
//     const [phoneError, setPhoneError] = useState(false)

//     const handleInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setUserRegister({ ...userRegister, [name]: value })

//         if (value.length <= 0) {
//             setNameError(true)
//         }
//         if (value.length <= 0) {
//             setUserNameError(true)
//         }
//         if (value.length <= 0) {
//             setEmailError(true)
//         }
//         if (value.length <= 0) {
//             setPhoneError(true)
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }

//     return (
//         <div className="bg-black w-1/2">
//             <div className="w-1/3 m-auto">
//                 <img className="w-60 absolute top-24" src={superLogo}></img>
//             </div>
//             <p className="text-white top-40 absolute mx-72">Create your new account</p>
//             <form className="absolute top-52 mx-52 text-white" onSubmit={handleSubmit}>

//                 <input type="text" name="name" value={userRegister.name} placeholder="Name" className="py-2 px-2 rounded-sm w-[350px] bg-[#292929]" onChange={handleInput}></input>
//                 {nameError ? <p className="text-[#FF0000] mt-1 text-sm" >Field is Required</p> : ""}

//                 <input type="text" name="userName" value={userRegister.userName} placeholder="UserName" className="py-2 px-2 my-2 rounded-sm w-[350px] bg-[#292929]" onChange={handleInput}></input>
//                 {userNameError ? <p className="text-[#FF0000] mb-2 text-sm" >Field is Required</p> : ""}

//                 <input type="email" name="email" value={userRegister.email} placeholder="Email" className="py-2 px-2 rounded-sm w-[350px] bg-[#292929]" onChange={handleInput}></input>
//                 {emailError ? <p className="text-[#FF0000] mt-2 text-sm" >Field is Required</p> : ""}

//                 <input type="number" name="phone" value={userRegister.phone} placeholder="Phone" className="py-2 px-2 my-2 rounded-sm w-[350px] bg-[#292929]" onChange={handleInput}></input>
//                 {phoneError ? <p className="text-[#FF0000] text-sm" >Field is Required</p> : ""}

//                 <div className="flex">
//                     <input type="checkBox"></input>
//                     <p className="text-[#7C7C7C] mx-2 text-sm font-bold">Share my registration data with Superapp</p>
//                 </div>

//                 <button className="bg-[#72DB73] w-[350px] my-2 py-2 rounded-md" onSubmit={(e) => e.preventDefault()}><Link to={"/genre"}>SIGN UP</Link></button>
//                 <p className="text-[#7C7C7C] text-sm">By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
//                 <p className="text-[#7C7C7C] my-2 text-sm">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>

//             </form>

//         </div>
//     )
// }

// export default SignIn;