import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const MapContainer = () => {
  useEffect(() => {
    getUserLocation();
  }, []);
  const [userLocation, setUserLocation] = useState();
  const [parks, setParks] = useState([]);
  const [selected, setSelected] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAac0W1FcByS8ETCOwZ7_1UXuBbVR89lCc",
    libraries: libraries,
  });
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(pos, getNearbyDogParks(pos));
      });
    }
  };
  const getNearbyDogParks = (pos) => {
    let request = {
      location: pos,
      rankBy: window.google.maps.places.RankBy.DISTANCE,
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
  const mapRef = useRef();
  const onMapload = useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "error loading maps";
  if (!isLoaded) return "loading maps";
  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={userLocation}
      onLoad={onMapload}
    >
      {parks &&
        parks.map((park) => (
          <Marker
            key={`${park.place_id}`}
            position={{
              lat: park.geometry.location.lat(),
              lng: park.geometry.location.lng(),
            }}
            onClick={() => {
              setSelected(park);
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
          <div>
            <h2>{selected.name}</h2>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};
export default MapContainer;
