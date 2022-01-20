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
  const [goku] = useState(Goku);  
  const [krillin] = useState(Krillin);
  const [roshi] = useState(MasterRoshi)
  const [chichi] = useState(ChiChi);
  const [bulma] = useState(Bulma);
  const [popo] = useState(Popo);
  const [shenron] = useState(Shenron);
  const [yamcha] = useState(Yamcha)
  const [tien] = useState(Tien);
  const [yajirobe] = useState(Yajirobe);
  const [piccolo] = useState(Piccolo)
  const [mai] = useState(Mai)
  const [jackiechun] = useState(JackieChun)
  const [pilaf] = useState(Pilaf)
  const [murasaki] = useState(Murasaki);

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
  const [arrayTrack,setArrayTrack] = useState([])
  
  const [curscore, setCurScore] = useState(0);
  const [hiscore,setHiScore] = useState(0);
  
  const [unused,setUnused] = useState([
    `Goku`,`Krillin`,`Master Roshi`,`Chi Chi`,`Bulma`,
    `Popo`,`Shenron`,`Yamcha`,`Tien`,`Yajirobe`,`Piccolo`,
    `Mai`,`Jackie Chun`,`Pilaf`,`Murasaki`
  ]);


  
function handleClick(e){
    shuffleDeck(e);
}

//checks card targets name
//is it in array track? if not, 
//is current score 14?
//if not push the name to array track
//set current score
//remove from unselected list.

//else 
//set current score to hi score (if higher than hi score)
//reset current score to 0
//reset array track to 0
//reset unused to initial list.

//after this we shuffle the deck
//after shuffled we ensure that at least one of the 
//first six cards name belongs to unused list.  

function pickCard(e){
  for(let i = 0; i < cardsArray.length; i++){
    if (e.target.name === cardsArray[i].name){
      if (arrayTrack.includes(e.target.name)==false){
        if(curscore === 14){
         return winGame();
        } else {
          arrayTrack.push(e.target.name);
          setCurScore(curscore+1)
          addUnselected(e);
        }
        
      } else if (arrayTrack.includes(e.target.name)==true){
        checkScore(); 
        setCurScore(curscore-curscore);
        setArrayTrack([]);
        setUnused([`Goku`,`Krillin`,`Master Roshi`,`Chi Chi`,`Bulma`,
        `Popo`,`Shenron`,`Yamcha`,`Tien`,`Yajirobe`,`Piccolo`,
        `Mai`,`Jackie Chun`,`Pilaf`,`Murasaki`])
      }
    }   
  }
}

  
async function shuffleDeck(e){
  await(pickCard(e));
  
  let i = cardsArray.length -1;
  let count = 0;
  outer:while(count < 1){
    for(; i>0; i--){
      const j = Math.floor(Math.random() * (i+1));
      const temp = cardsArray[i];
      cardsArray[i] = cardsArray[j];
      cardsArray[j] = temp
    }
    let tempArray = cardsArray.filter((index,i) => i < 6);
    if (pickUnselected(tempArray)===true){
      const shuffledArray = cardsArray.filter((index,i) => i < 6);
      setCards(shuffledArray) 
      count++;
      console.log(unused);
    } else {
      continue outer;
    }
  }
 
}

  function checkScore(){
    if(curscore > hiscore){
      setHiScore(curscore);
    }
  }

function winGame(){
      setCurScore(0);
      setHiScore(15);
      setArrayTrack([]);
      setUnused([`Goku`,`Krillin`,`Master Roshi`,`Chi Chi`,`Bulma`,
      `Popo`,`Shenron`,`Yamcha`,`Tien`,`Yajirobe`,`Piccolo`,
      `Mai`,`Jackie Chun`,`Pilaf`,`Murasaki`])
  }

  function addUnselected(e){
    setUnused(
    unused.filter(index=>!(index==e.target.name))
    )
    return unused;
  }
  
  function pickUnselected(array){
  let arr = [];
    for(let i = 0; i < array.length; i++){
      arr.push(array[i].name)
    }
    for(let i = 0; i < arr.length; i++){
      if (arr.includes(unused[i])){
        return true;
      }
    }
    return false;
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
          <div className = "card--name">{index.name}</div>
        </div>
      )))}
    </div>
    </>
  )
}

//Need to figure out how to always have at least
//one unselected element on display in order for
//this to work properly. 

//let tempCount = 0;
//while (tempCount < 1){
//  let tempVar = cardsArray.filter((index,i)=>i<6);
//  for(let i = 0; i < tempVar.length; i++){
//  if (tempVar.includes(unused[i])){
//    tempCount++;
//    return tempVar;
//  }
//}