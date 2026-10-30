
import type { IavailablePlayerProps, Iplayer } from "../../types/playerType";
import PlayerCard from "./PlayerCard";



const AvailablePlayers = ({ players, coin, setCoin, selectPlayers, setSelectPlayers }:IavailablePlayerProps) => {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {players.map((player: Iplayer) => {
    return (
      <PlayerCard 
      player = { player } 
      coin = { coin } 
      setCoin = { setCoin }
      selectPlayers = { selectPlayers } 
      setSelectPlayers = { setSelectPlayers }></PlayerCard>
    );
  })}
</div>

  );
};

export default AvailablePlayers;