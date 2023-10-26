import superLogo from "../Assests/Superapp.png"
import {useState} from "react"

const SignIn = () => {

    return (
        <div className="bg-black w-1/2">
            <div className="w-1/3 m-auto">
                <img className="w-60 absolute top-24" src={superLogo}></img>
            </div>
            <p className="text-white top-40 absolute mx-72">Create your new account</p>
            <form className="absolute text-black top-52 mx-52">

                <input type="text" placeholder="Name" className="py-2 px-2 rounded-sm w-[350px] bg-[#292929]"></input>
                <input type="text" placeholder="UserName" className="py-2 px-2 my-4 rounded-sm w-[350px] bg-[#292929]"></input>
                <input type="email" placeholder="Email" className="py-2 px-2 rounded-sm w-[350px] bg-[#292929]"></input>
                <input type="phone" placeholder="Phone" className="py-2 px-2 my-4 rounded-sm w-[350px] bg-[#292929]"></input>

                <div className="flex">
                    <input type="checkBox"></input>
                    <p className="text-[#7C7C7C] mx-2 text-sm font-bold">Share my registration data with Superapp</p>
                </div>

                <button className="bg-[#72DB73] w-[350px] my-2 py-2 rounded-md" onSubmit={(e)=> e.preventDefault() }>SIGN UP</button>
                <p className="text-[#7C7C7C] text-sm">By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
                <p className="text-[#7C7C7C] my-2 text-sm">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>

            </form>

        </div>
    )
}

export default SignIn;