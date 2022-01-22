import { useState } from "react";
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
    {name:`Mr.Popo`,src:popo,id:uuidv4()},
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

  const [unselected,setUnselected] = useState([
    {name:`Goku`,src:goku,id:uuidv4()},
    {name:`Krillin`,src:krillin,id:uuidv4()},
    {name:`Master Roshi`,src:roshi,id:uuidv4()},
    {name:`Chi Chi`,src:chichi,id:uuidv4()},
    {name:`Bulma`,src:bulma,id:uuidv4()},
    {name:`Mr.Popo`,src:popo,id:uuidv4()},
    {name:`Shenron`,src:shenron,id:uuidv4()},
    {name:`Yamcha`,src:yamcha,id:uuidv4()},
    {name:`Tien`,src:tien,id:uuidv4()},
    {name:`Yajirobe`,src:yajirobe,id:uuidv4()},
    {name:`Piccolo`,src:piccolo,id:uuidv4()},
    {name:`Mai`,src:mai,id:uuidv4()},
    {name:`Jackie Chun`,src:jackiechun,id:uuidv4()},
    {name:`Pilaf`,src:pilaf,id:uuidv4()},
    {name:`Murasaki`,src:murasaki,id:uuidv4()}
  ]);
  
  const [cards, setCards] = useState(cardsArray.filter((index,i)=>i<6));

  const [curscore, setCurScore] = useState(0);
  const [hiscore,setHiScore] = useState(0);
  
  const [selected,setSelected] = useState([]);
  
function handleClick(e){
  placeCards(e)
}

function pickCard(e){
  let picked;
  for(let i = 0; i < cardsArray.length; i++){
    if (e.target.name === cardsArray[i].name){
      if (!(selected.some(index=>(index.name===e.target.name)))){
          picked = cardsArray.filter(index=>(index.name===e.target.name))
          setSelected([...selected,picked[0]]);
          console.log(unselected.some(index => (index.name===e.target.name)))
          setUnselected(unselected.filter(index=>!(index.name===e.target.name)))
          setCurScore(curscore+1)
          console.log(unselected);
      } else if (selected.some(index=>(index.name===e.target.name))){
        checkScore(); 
        setCurScore(curscore-curscore);
        setSelected([]);
        setUnselected([
          {name:`Goku`,src:goku,id:uuidv4()},
          {name:`Krillin`,src:krillin,id:uuidv4()},
          {name:`Master Roshi`,src:roshi,id:uuidv4()},
          {name:`Chi Chi`,src:chichi,id:uuidv4()},
          {name:`Bulma`,src:bulma,id:uuidv4()},
          {name:`Mr.Popo`,src:popo,id:uuidv4()},
          {name:`Shenron`,src:shenron,id:uuidv4()},
          {name:`Yamcha`,src:yamcha,id:uuidv4()},
          {name:`Tien`,src:tien,id:uuidv4()},
          {name:`Yajirobe`,src:yajirobe,id:uuidv4()},
          {name:`Piccolo`,src:piccolo,id:uuidv4()},
          {name:`Mai`,src:mai,id:uuidv4()},
          {name:`Jackie Chun`,src:jackiechun,id:uuidv4()},
          {name:`Pilaf`,src:pilaf,id:uuidv4()},
          {name:`Murasaki`,src:murasaki,id:uuidv4()}
        ])
      }
    }   
  }
}

function shuffleDeck(e){
  pickCard(e);

  if(selected.length > 6){
  let notPicked = shuffle(unselected).filter((index,i) => i < 2)
  let picked = shuffle(selected).filter((index,i)=> i < 4);
  let newShuffle = notPicked.concat(picked)
  let shuffledCards = shuffle(newShuffle);
  return shuffledCards; 
  } else {
  let newShuffle = shuffle(cardsArray)
  let shuffledCards = newShuffle.filter((index,i)=> i<6);
  return shuffledCards;
  }
}

function shuffle(input){
  let i = input.length -1;
  for(; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp
  }
  return input;
}


function placeCards(e){
  if (curscore === 14 && (!(selected.some(index=>(index.name===e.target.name))))){
    return winGame();
  } else {
    const response = shuffleDeck(e);
    return setCards(response);
  }
}

//Score functions 

function checkScore(){
    if(curscore > hiscore){
      setHiScore(curscore);
    }
  }

function winGame(){
      setCurScore(0);
      setHiScore(15);
      setSelected([]);
      setUnselected([
        {name:`Goku`,src:goku,id:uuidv4()},
        {name:`Krillin`,src:krillin,id:uuidv4()},
        {name:`Master Roshi`,src:roshi,id:uuidv4()},
        {name:`Chi Chi`,src:chichi,id:uuidv4()},
        {name:`Bulma`,src:bulma,id:uuidv4()},
        {name:`Mr.Popo`,src:popo,id:uuidv4()},
        {name:`Shenron`,src:shenron,id:uuidv4()},
        {name:`Yamcha`,src:yamcha,id:uuidv4()},
        {name:`Tien`,src:tien,id:uuidv4()},
        {name:`Yajirobe`,src:yajirobe,id:uuidv4()},
        {name:`Piccolo`,src:piccolo,id:uuidv4()},
        {name:`Mai`,src:mai,id:uuidv4()},
        {name:`Jackie Chun`,src:jackiechun,id:uuidv4()},
        {name:`Pilaf`,src:pilaf,id:uuidv4()},
        {name:`Murasaki`,src:murasaki,id:uuidv4()}
    ]);
    setCards(cardsArray.filter((index,i)=>i<6));
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

