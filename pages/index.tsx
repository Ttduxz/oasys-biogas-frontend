import Dashboard from "./Dashboard"
import { useEffect, useState } from "react";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

interface Data {
  ID: string;
  TimeStamp: Date;
  Temp:number;
  Humi:number;
  MPXV:number;
  DFRo:number;
  ServerTime:Date;
}

const getUser = async () => {
  try {
    const response = await axios.get('https://bio-gas.vercel.app/bio-gas')
    console.log("response: ", response)
    // do something about response
  } catch (error) {
    console.log('Request canceled', error.message);
    axios.isCancel(error)
  }
}

getUser()

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
        pa="300"
      />
    </>
  )
}

export default Home