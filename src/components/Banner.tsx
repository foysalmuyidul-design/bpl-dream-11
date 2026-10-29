import Img from '../assets/bg-shadow.png'
import BannerImg from '../assets/banner-main.png'

const Banner = () => {
  return (
    <div className="container mx-auto bg-cover bg-black rounded-xl py-12 flex flex-col justify-center items-center gap-6"
    style={{ backgroundImage: `url(${Img})` }}    
    >
      <img src={BannerImg} alt="" className='max-h-40'/>

      <h2 className='text-3xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>

      <h3 className='text-xl text-gray-300 '>Beyond Boundaries Beyond Limits</h3>

      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#E7FE29] rounded-xl ">Claim Free Credit</button>
        
    </div>

  );
};

export default Banner;