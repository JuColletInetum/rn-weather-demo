import {NavigationContainer} from '@react-navigation/native';

export default function NavContainer({children}: React.PropsWithChildren<{}>) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
