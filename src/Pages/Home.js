import SignUpFrom from "../Components/Home/SignUpForm";
import Banner from "../Components/Home/Banner"

const Home = ()=>{
    return(
        <div className="flex">
        <Banner/>
        <SignUpFrom/>
        </div>
    )
}

export default Home;