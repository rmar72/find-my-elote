import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "./FoodMap.module.css"
import L from "leaflet"
import elote from "./output.png"

const FoodMap: React.FC = () => {
  const myLocation = [39.899339, -104.940217]
  const tacoTruck = [39.885456, -104.935856]
  const vendor2 = [39.884785, -104.912684]
  const paleteroMan = [39.899315, -104.940233]
  const MAPBOX_API_KEY = import.meta.env.VITE_REACT_APP_MAPBOX_API_KEY
  const MAPBOX_USERID = import.meta.env.VITE_REACT_APP_MAPBOX_USERID
  const MAPBOX_STYLED = import.meta.env.VITE_REACT_APP_MAPBOX_STYLED

  interface UserPosition {
    location: Array<number>
  }

  const iconPerson = new L.Icon({
    iconUrl: elote,
    iconRetinaUrl: elote,
    iconSize: new L.Point(60, 75),
  })

  const dynamicElotero: any = {
    updatedLoc1: [39.898884, -104.940171],
    updatedLoc2: [39.897794, -104.940093],
    updatedLoc3: [39.896848, -104.940093],
    updatedLoc4: [39.896608, -104.93886],
  }

  const [paleteroManLocation, setPMLoc] = useState<any>(paleteroMan)
  const [numberUpdate, setNumberUpdate] = useState(1)

  useEffect(() => {
    let myInterval: any
    if (numberUpdate <= 4) {
      myInterval = setInterval(() => {
        console.log(
          "dynamicElotero[`updatedLoc${numberUpdate}`]",
          dynamicElotero[`updatedLoc${numberUpdate}`],
        )
        setPMLoc(dynamicElotero[`updatedLoc${numberUpdate}`])
        setNumberUpdate((prev) => prev + 1)
      }, 2000)
    }

    return () => {
      console.log("cleaning up")
      clearInterval(myInterval)
    }
  }, [paleteroManLocation, numberUpdate])

  const changeLoc = () => {
    console.log(
      "dynamicElotero[`updatedLoc${numberUpdate}`]",
      dynamicElotero[`updatedLoc${numberUpdate}`],
    )
    setPMLoc(dynamicElotero[`updatedLoc${numberUpdate}`])
    setNumberUpdate((prev) => prev + 1)
    console.log("numberUpdate", numberUpdate)
  }

  return (
    <Layout>
      <button onClick={changeLoc} type="button">
        Poll location
      </button>
      <MapContainer center={myLocation as any} zoom={17} scrollWheelZoom={true}>
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLED}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
        />
        <Marker position={vendor2 as any}>
          <Popup>
            Vendor 1 <br /> Delicious Pinon
          </Popup>
        </Marker>
        <Marker position={tacoTruck as any}>
          <Popup>
            Tacos El Compa <br /> y pupusas
          </Popup>
        </Marker>
        <Marker icon={iconPerson} position={paleteroManLocation as any}>
          <Popup>
            Paletero Don Cruz <br /> Frozen snacks
          </Popup>
        </Marker>
      </MapContainer>
    </Layout>
  )
}

export default FoodMap
