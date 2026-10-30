import { FaFlag, FaUser } from "react-icons/fa";
import type { IplayerCardProps } from "../../types/playerType";
import { useState } from "react";
import { toast } from "react-toastify";


const PlayerCard = ({ player, coin, setCoin, selectPlayers, setSelectPlayers }: IplayerCardProps) => {

    const [isSelected, SetIsSelected] = useState(false)

    const handleSelectedPlayer = (Selection: boolean) => {
        SetIsSelected(Selection)
        

        const newCoinAmount = coin - player.price

        if(newCoinAmount >= 0) 
        {setCoin(newCoinAmount)
        toast.success(`${player.name} is purchased successfully`)}
        else{toast.error("Coin is not enough")}

        // selected players logic 
        setSelectPlayers([...selectPlayers, player])
    }
  return (
    
      <div 
        key={player.name} 
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        {/* Image Section with Overlay Effect */}
        <figure className="relative aspect-4/3 w-full overflow-hidden bg-base-200">
          <img 
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
            src={player.image} 
            alt={player.name}
          />
          <div className="absolute top-3 right-3">
            <span className="badge badge-neutral font-medium shadow-sm backdrop-blur-md bg-opacity-80 px-3 py-3 text-xs tracking-wide">
              {player.playertype}
            </span>
          </div>
        </figure>

        {/* Card Body */}
        <div className="flex flex-col grow p-5">
          {/* Title & Origin */}
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-xl font-bold text-base-content tracking-tight">
              <FaUser className="text-primary text-lg opacity-80" />
              {player.name}
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-base-content/60">
              <FaFlag className="text-base-content/40" />
              {player.origin}
            </p>
          </div>

          {/* Stats Divider & Section */}
          <div className="mt-auto space-y-3 pt-3 border-t border-base-200/60">
            <div className="flex justify-between items-center text-xs font-semibold tracking-wider text-base-content/40 uppercase">
              <span>Batting</span>
              <span>Bowling</span>
            </div>
            
            <div className="flex justify-between items-center text-sm font-medium text-base-content/80 bg-base-200/40 rounded-xl px-3 py-2">
              <span className="truncate max-w-30">{player.battingstyle}</span>
              <span className="truncate max-w-30 text-right">{player.bowlingstyle}</span>
            </div>

            {/* Price & Action Button */}
            <div className="flex justify-between items-center pt-3">
              <div className="flex flex-col">
                <span className="text-xs text-base-content/50 font-medium">Price</span>
                <span className="text-xl font-black text-primary">
                  ${player.price.toLocaleString()}
                </span>
              </div>

              {/* choose player button */}
              <button
              onClick={() => handleSelectedPlayer(true)}              
              className="btn btn-primary btn-sm md:btn-md rounded-xl shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all"
              disabled = { isSelected }>
                {isSelected === true ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default PlayerCard;