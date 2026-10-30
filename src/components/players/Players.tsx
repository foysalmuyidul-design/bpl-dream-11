import { use, useState } from 'react';
import type { Iplayer, IplayersProps } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const Players = ({ playersPromise, coin, setCoin }: IplayersProps) => {

  const players = use(playersPromise)

  const [buttonType, setButtonType] = useState<"Available" | "Selected">("Available")
  const [selectPlayers, setSelectPlayers] = useState<Iplayer[]>([])

  const handleButtonType = (type: "Available" | "Selected") => {
    setButtonType(type)
  }

  return (

    <div className='container mx-auto my-8 '>
      <div className='flex justify-between mb-6'>
        <h2 className='font-bold text-2xl'>
          {buttonType === "Available" ? "Available Players" : "Selected Players"}
          
        </h2>

        <div className='join rounded-xl'>
          <button
           onClick={() => handleButtonType("Available")}
          className={`btn join-item ${buttonType === "Available" ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button 
          onClick={() => handleButtonType("Selected")}
           className={`btn join-item ${buttonType === "Selected" ? "bg-[#E7FE29]" : ""}`}>Selected</button>
        </div>
      </div>

      {buttonType === "Available" ? <AvailablePlayers 
      players={players} 
      coin = { coin } 
      setCoin = { setCoin } 
      selectPlayers = { selectPlayers } 
      setSelectPlayers = { setSelectPlayers }></AvailablePlayers> : <SelectedPlayers selectPlayers = { selectPlayers } 
      setSelectPlayers = { setSelectPlayers }></SelectedPlayers>}


      


    </div>
  );
};

export default Players;