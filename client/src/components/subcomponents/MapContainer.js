import React, { useState, useCallback, useRef } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import mapStyles from "../styles/mapStyles";
import axios from "axios";
import ThreadContainer from "./ThreadContainer";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "70vh",
};
const options = {
  styles: mapStyles,
};
const MapContainer = () => {
  const [userLocation, setUserLocation] = useState();
  const [parks, setParks] = useState([]);
  const [search, setSearch] = useState();
  const mapRef = useRef();
  const onMapload = useCallback((map) => {
    mapRef.current = map;
    getUserLocation();
  }, []);
  const [selected, setSelected] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(pos);
        setUserLocation(pos, getNearbyDogParks(pos));
      });
    }
  };
  const getNearbyDogParks = (pos) => {
    let request = {
      location: pos,
      radius: "1000000",
      rankby: "distance",
      keyword: "dog park",
    };
    let service = new window.google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, nearbyCallback);
  };
  const nearbyCallback = (results, status) => {
    if (status == window.google.maps.places.PlacesServiceStatus.OK) {
      setParks(results);
      console.log(results);
    }
  };

  const parkDBCall = (park) => {
    console.log(mapRef);
    let newPark = {
      id: park.place_id,
      name: park.name,
      rating: park.rating,
    };
    axios({
      method: "POST",
      data: newPark,
      url: "http://localhost:3000/parks/api",
    }).then((response) => {
      console.log(response);
    });
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: search }, function (results, status) {
      if (status == window.google.maps.GeocoderStatus.OK) {
        let pos = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
        setUserLocation(pos, getNearbyDogParks(pos));
      } else {
        console.log("tits");
      }
    });
  };

  if (loadError) return console.log("error loading maps");
  if (!isLoaded) return "loading maps";
  return (
    <>
      <div className="search-form">
        <Form onSubmit={(e) => handleSearchSubmit(e)} inline>
          <FormControl
            onChange={(e) => handleSearchInput(e)}
            type="text"
            placeholder="Search for dog parks"
            className="mr-sm"
          />
          <Button onClick={(e) => handleSearchSubmit(e)} variant="success">
            Search
          </Button>
        </Form>
      </div>
      <div id="map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={userLocation}
          onLoad={onMapload}
          options={options}
        >
          {parks &&
            parks.map((park) => (
              <Marker
                key={`${park.place_id}`}
                position={{
                  lat: park.geometry.location.lat(),
                  lng: park.geometry.location.lng(),
                }}
                icon={{
                  url: "/dog-cartoon.svg",
                  scaledSize: new window.google.maps.Size(30, 30),
                  anchor: new window.google.maps.Point(15, 0),
                }}
                onClick={() => {
                  setSelected(park, parkDBCall(park));
                }}
              ></Marker>
            ))}
          {selected ? (
            <InfoWindow
              position={{
                lat: selected.geometry.location.lat(),
                lng: selected.geometry.location.lng(),
              }}
              onCloseClick={() => setSelected(null)}
            >
              <div className="text-center">
                <h2>{selected.name}</h2>
                <h3>{selected.rating} Stars</h3>
                <Button>Park Chat</Button>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
      <ThreadContainer />
    </>
  );
};
export default MapContainer;
