import type { Dispatch, SetStateAction } from "react"

export interface Iplayer {
    name: string,
    image: string,
    origin: string,
    playertype: string,
    bowlingstyle: string,
    battingstyle: string,
    price: number,
    isSelected: boolean

}

export interface IplayersProps {
  playersPromise : Promise<Iplayer[]>
  coin : number
  setCoin : Dispatch<SetStateAction<number>>
}

export interface IavailablePlayerProps {
  players : Iplayer[]  
  coin : number
  setCoin : Dispatch<SetStateAction<number>>
  selectPlayers : Iplayer[]
  setSelectPlayers : Dispatch<SetStateAction<Iplayer[]>>
}

export interface IplayerCardProps {
  player : Iplayer  
  coin : number
  setCoin : Dispatch<SetStateAction<number>>
  selectPlayers : Iplayer[]
  setSelectPlayers : Dispatch<SetStateAction<Iplayer[]>>
}

export interface IselectedPlayerProps {
  selectPlayers : Iplayer[]
  setSelectPlayers : Dispatch<SetStateAction<Iplayer[]>>
}