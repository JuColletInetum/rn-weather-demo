import {useState, useEffect} from 'react';
import RNLocation from 'react-native-location';

const useLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<'No coordinates' | 'No permission'>();
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  const getLocation = async () => {
    setIsLoading(true);
    let hasPermission = await RNLocation.checkPermission({
      ios: 'whenInUse',
    });
    if (!hasPermission) {
      hasPermission = await RNLocation.requestPermission({
        ios: 'whenInUse',
      });
    }
    if (hasPermission) {
      RNLocation.configure({distanceFilter: 0});
      RNLocation.getLatestLocation({timeout: 1000}).then(currentLocation => {
        if (
          currentLocation?.longitude == null ||
          currentLocation.latitude == null
        ) {
          return setError('No coordinates');
        }
        setLocation({
          longitude: currentLocation?.longitude,
          latitude: currentLocation?.latitude,
        });
      });
    } else {
      setError('No permission');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    error,
    location,
    isLoading,
    getLocation,
  };
};

export default useLocation;
