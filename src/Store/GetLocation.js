import { useState, useEffect } from "react";

const GetLocation = (props) => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "31.251289", lng: "32.287750" },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({ code: 0, massage: "Geolocation not supported" });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default GetLocation;
