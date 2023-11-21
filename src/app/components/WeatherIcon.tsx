import {SvgProps} from 'react-native-svg';
import {Images} from '../../common/assets';

const iconsMapping: {
  codes: number[];
  icon: React.FC<SvgProps>;
}[] = [
  {codes: [0, 1], icon: Images.Sunny},
  {codes: [2, 3, 45, 48], icon: Images.PartlyCloudy},
  {codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67], icon: Images.Rainy},
  {codes: [80, 81, 82, 95, 96, 99], icon: Images.RainThunder},
  {codes: [71, 73, 75, 77, 85, 86], icon: Images.Snowy},
];

export const WeatherIcon = ({code, ...props}: {code: number} & SvgProps) => {
  const Icon = iconsMapping.find(({codes}) => codes.includes(code))?.icon;

  if (Icon == null) return null;

  return <Icon {...props} />;
};
