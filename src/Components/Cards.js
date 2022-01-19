import { useState,useEffect } from "react";
import React from 'react'
import {v4 as uuidv4} from 'uuid'
import Goku from '../DBPictures/Goku.png'
import Krillin from '../DBPictures/Krillin.png'
import MasterRoshi from '../DBPictures/Master-Roshi.png'
import ChiChi from '../DBPictures/Chi-Chi.png'
import Bulma from '../DBPictures/Bulma.png'
import Yamcha from '../DBPictures/Yamcha.png'
import Tien from '../DBPictures/Tien.png'
import Yajirobe from '../DBPictures/Yajirobe.png'
import Popo from '../DBPictures/MrPopo.png'
import Shenron from '../DBPictures/Shenron.png'
import Piccolo from '../DBPictures/Piccolo.png'
import JackieChun from '../DBPictures/Jackie-Chun.png'
import Mai from '../DBPictures/Mai.png';
import Pilaf from '../DBPictures/Pilaf.png'
import Murasaki from '../DBPictures/Murasaki.png'

export default function Cards() {
  const [goku, setGoku] = useState(Goku);  
  const [krillin, setKrillin] = useState(Krillin);
  const [roshi,setRoshi] = useState(MasterRoshi)
  const [chichi,setChiChi] = useState(ChiChi);
  const [bulma,setBulma] = useState(Bulma);

  const [popo,setPopo] = useState(Popo);
  const [shenron,setShenron] = useState(Shenron);
  
  const [yamcha,setYamcha] = useState(Yamcha)
  const [tien,setTien] = useState(Tien);
  const [yajirobe,setYajirobe] = useState(Yajirobe);

  const [piccolo, setPiccolo] = useState(Piccolo)
  const [mai, setMai] = useState(Mai)
  const [jackiechun, setJackieChun] = useState(JackieChun)
  const [pilaf,setPilaf] = useState(Pilaf)
  const [murasaki, setMurasaki] = useState(Murasaki);

  const cardsArray = [
    {name:`Goku`,src:goku,id:uuidv4()},
    {name:`Krillin`,src:krillin,id:uuidv4()},
    {name:`Master Roshi`,src:roshi,id:uuidv4()},
    {name:`Chi Chi`,src:chichi,id:uuidv4()},
    {name:`Bulma`,src:bulma,id:uuidv4()},
    {name:`Popo`,src:popo,id:uuidv4()},
    {name:`Shenron`,src:shenron,id:uuidv4()},
    {name:`Yamcha`,src:yamcha,id:uuidv4()},
    {name:`Tien`,src:tien,id:uuidv4()},
    {name:`Yajirobe`,src:yajirobe,id:uuidv4()},
    {name:`Piccolo`,src:piccolo,id:uuidv4()},
    {name:`Mai`,src:mai,id:uuidv4()},
    {name:`Jackie Chun`,src:jackiechun,id:uuidv4()},
    {name:`Pilaf`,src:pilaf,id:uuidv4()},
    {name:`Murasaki`,src:murasaki,id:uuidv4()}
  ]; 
  
  const [cards, setCards] = useState(cardsArray.filter((index,i)=>i<6));
  const [curscore, setCurScore] = useState(0);
  const [hiscore,setHiScore] = useState(0);
  const [arrayTrack,setArrayTrack] = useState([])

  
function handleClick(e){
    pickCard(e);
    shuffleDeck();
  }

function pickCard(e){
  for(let i = 0; i < cardsArray.length; i++){
    if (e.target.name === cardsArray[i].name){
      if (arrayTrack.includes(e.target.name)==false){
        arrayTrack.push(e.target.name);
        setCurScore(curscore+1)
        console.log(arrayTrack);
      } else 
      if (arrayTrack.includes(e.target.name)==true){
        checkScore(); 
        setCurScore(curscore-curscore);
        setArrayTrack([]);
        console.log(arrayTrack)
      }
    }  
  }
}
  
  function shuffleDeck(){
    let i = cardsArray.length -1;
    for(; i>0 ;i--){
      const j = Math.floor(Math.random() * (i+1));
      const temp = cardsArray[i];
      cardsArray[i] = cardsArray[j];
      cardsArray[j] = temp
    }
    const shuffledArray = cardsArray.filter((index,i) => i < 6);
    setCards(shuffledArray)
  }

  function checkScore(){
    if(curscore > hiscore){
      setHiScore(curscore);
    }
  }
  
  return (
    <>
    <div className = "count--counter-div">
      <div className = "count--high-score">High Score:{hiscore}</div>
      <div className = "count--current-score">Current Score:{curscore}</div>
    </div>
    <div className = "card--main-div" key = "50">
      {cards.map((index => (
        <div className = "card--div" key = {index.src}>
          <img 
          src = {index.src} 
          key = {index.id} 
          name = {index.name}
          onClick = {handleClick}></img>
        </div>
      )))}
    </div>
    </>
  )
}



//function selectedCard(e){
//  for(let i = 0; i < cardsArray.length; i++){
//    if (e.target.name === cardsArray[i].name){
//      if(cardsArray[i].selected == true){
//        setCurScore(curscore-curscore)
//      } else if (cardsArray[i].selected == false) {
//      cardsArray[i].selected = true;
//      setCurScore(curscore+1)
//    }
//  }
//}
//}

//else if (arrayTrack.includes(e.target.name)==true){
//  setArrayTrack([]);
//  setCurScore(curscore-curscore);
//  console.log(arrayTrack)
//}