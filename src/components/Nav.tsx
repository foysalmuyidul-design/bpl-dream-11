import Logo from '../assets/logo.png'
import { ImCoinDollar } from "react-icons/im";

const Nav = ({ coin }: {coin : number}) => {

  
  return (
    <nav className='container mx-auto'>
        <div className="py-5 flex justify-between items-center">
            <img src={Logo} alt="" />

        <ul className='flex gap-4 items-center'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <li className='font-semibold'><button className="btn btn-outline">{coin} Coin <span className='text-xl text-amber-500'><ImCoinDollar /></span></button></li>
        </ul>


        </div>
        
      </nav>
  );
};

export default Nav;