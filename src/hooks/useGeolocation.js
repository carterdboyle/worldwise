import { useCallback, useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  const getPosition = useCallback(
    function getPosition() {
      if (!navigator.geolocation)
        return setError("Your browser does not support geolocation");

      // Necessary because I think it infinitely will call this
      // if the return coords aren't identical every time
      if (
        position !== null &&
        position.lat !== defaultPosition?.lat &&
        position.lng !== defaultPosition?.lng
      ) {
        return;
      }
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    },
    [defaultPosition, position]
  );

  return { isLoading, position, error, getPosition };
}
