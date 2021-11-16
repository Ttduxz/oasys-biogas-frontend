import Dashboard from "./Dashboard"
import axios from "axios"
import React from "react";
import Picture from '../components/Picture'
import { getStorage, ref, getDownloadURL, getMetadata } from "firebase/storage";
import { initializeApp } from "firebase/app";

interface Data {
  ID: number;
  TimeStamp: Date;
  Temp:string;
  Humi:string;
  MPXV:string;
  DFRo:string;
  ServerTime:Date;
}

interface Data2 {
  tbl_id: string;
  time_date: string;
  flow:string;
  total:string;
}

interface State {
  data: Data[]
  data2: Data2[]
  image: {
    url:string,
    timestamp:string
  }
}

export default class Home extends React.Component {
  state:State = {
    data: [],
    data2: [],
    image: {
      url:"",
      timestamp:""
    }
  }

  state2:State = {
    data: [],
    data2: [],
    image: {
      url:"",
      timestamp:""
    }
  }

  async componentDidMount() {

    await axios.get('http://www.chiangraibiogas.com/fetchData.php?fbclid=IwAR2-sqeW6gGYMnWCMQ3R7uNq_gNP51eXk3GPEJP-_rLpTDtBiLfYteHuEZk')
      .then(res => {
        const data = res.data
        this.setState({ 
          data2: data
        })
      })

    
    await axios.get('https://bio-gas.vercel.app/bio-gas')
      .then(res => {
        const data = res.data
        this.setState({ data })
      })

    const firebaseConfig = {
      apiKey: "AIzaSyDf748nQBHqkjGNVd2jLtUtHn3oYyXW4i4",
      authDomain: "biogas-2f0c0.firebaseapp.com",
      projectId: "biogas-2f0c0",
      storageBucket: "biogas-2f0c0.appspot.com",
      messagingSenderId: "224002650726",
      appId: "1:224002650726:web:d433c268a6ee0242d433a7",
      measurementId: "G-7FN8KWBKFZ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const storage = getStorage();
    const forestRef = ref(storage, 'show.jpg')
    await getDownloadURL(forestRef)
      .then((res) => {
        this.setState({image:{url:res}})
      })
      
    await getMetadata(forestRef)
    .then((metadata) => {
      let a = new Date(metadata.timeCreated)
      let b = a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate() + " " + a.toTimeString()
      let c = b.split(" ")
      b = c[0] + " " + c[1]
      this.setState({image:{
        url: this.state.image.url,
        timestamp: b
      }})
    })
  }

  render() {
    for (let i in this.state.data) {
      if (this.state.data[i].ID == 1) {
        this.state2.data.push(this.state.data[i])
      }
      else continue
    }
    
    return  ( 
      <>
        {
          this.state.data[0] ? (
          <>

            <Dashboard
            data2={this.state.data2}
            data={this.state.data}
            station={this.state2.data[0].ID}
            date={this.state2.data[0].TimeStamp}
            temp={this.state2.data[0].Temp}
            humi={this.state2.data[0].Humi}
            pa={this.state2.data[0].MPXV}
            />
            <div className="grid grid-cols-1 xl:grid-cols-6">    
              <div className="xl:col-start-2 xl:col-end-6 px-4 mb-14">
                <Picture url={this.state.image.url} timestamp={this.state.image.timestamp}/>
              </div>
            </div>
          </>) : null
        }
      </> 
    )
  }
}