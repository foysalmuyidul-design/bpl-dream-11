import type { IselectedPlayerProps } from "../../types/playerType";


const SelectedPlayers = ({ selectPlayers, setSelectPlayers }: IselectedPlayerProps) => {
  console.log(selectPlayers, setSelectPlayers)
  return (
    <div>
      Selected Players
    </div>
  );
};

export default SelectedPlayers;