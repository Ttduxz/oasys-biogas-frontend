import Dashboard from "./Dashboard"
import { Schema, model, connect } from 'mongoose';
import { useEffect, useState } from "react";

interface Data {
  ID: string;
  TimeStamp: string;
  Temp:number;
  Humi:number;
  MPXV:number;
  DFRo:number;
  ServerTime:Date;
}

const Home = () => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  });
  
  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }
  
  return (
    <>
      <Dashboard
        station="01"
        date="Since 16-03-2021 23:48:35"
        temp="26.91"
        humi="38.5"
        pa="252"
      />

      <Dashboard
        station="02"
        date="Since 16-03-2021 23:48:35"
        temp="26.91"
        humi="38.5"
        pa="252"
      />
    </>
  )
}

export default Home