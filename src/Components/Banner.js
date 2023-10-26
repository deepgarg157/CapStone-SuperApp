import banner from "../Assests/image13.png"

const Banner = () => {
    return (
        <div className="w-1/2">
            <p className="absolute text-white text-5xl top-[520px] w-[550px] mx-10 font-bold">Discover new things on Superapp</p>
            <img className="h-[100vh] w-full" src={banner} alt="banner logo"></img>
        </div>
    )
}

export default Banner;