import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BookOpened = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}>
    <Path
      stroke="#48474B"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10.5 17.921V4.928m0 12.993c0 .059.063.097.117.07l1.356-.658a5.227 5.227 0 0 1 4.554 0c.676.329 1.473-.15 1.473-.884V4.928a1.06 1.06 0 0 0-.441-.857 5.646 5.646 0 0 0-6.618 0 1.06 1.06 0 0 0-.441.857m0 12.993c0 .059-.063.097-.117.07l-1.356-.658a5.227 5.227 0 0 0-4.554 0C3.796 17.662 3 17.183 3 16.45V4.928c0-.337.163-.655.441-.857a5.646 5.646 0 0 1 6.618 0c.278.202.441.52.441.857"
    />
  </Svg>
);

const DoubleSoup = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}>
    <Path
      stroke="#48474B"
      strokeLinecap="round"
      strokeWidth={2}
      d="M14.167 8.833h1.666c.92 0 1.694.767 1.393 1.637a5.007 5.007 0 0 1-3.893 3.294m-7.5 2.57H7.5m4.167 0h1.666m-5-10V4.666M5 6.333V4.667m6.393 5.803a5.002 5.002 0 0 1-9.452 0c-.302-.87.472-1.637 1.392-1.637H10c.92 0 1.694.767 1.393 1.637Z"
    />
  </Svg>
);
const Calendar = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}>
    <Path
      stroke="#48474B"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3 8.833h15M8 4.667H5.667c-.934 0-1.4 0-1.757.181-.314.16-.569.415-.728.729C3 5.933 3 6.4 3 7.333v8c0 .934 0 1.4.182 1.757.16.314.414.569.728.728.357.182.823.182 1.757.182h9.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757v-8c0-.933 0-1.4-.182-1.756a1.666 1.666 0 0 0-.728-.729c-.357-.181-.823-.181-1.757-.181H13m-5 0h5m-5 0V4.25a1.25 1.25 0 1 0-2.5 0v.417m7.5 0V4.25a1.25 1.25 0 1 1 2.5 0v.417"
    />
  </Svg>
);
const ClipBoardList = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}>
    <Path
      stroke="#48474B"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 4.667H6.333c-.92 0-1.666.746-1.666 1.666v10c0 .92.746 1.667 1.666 1.667h8.334c.92 0 1.666-.746 1.666-1.667v-10c0-.92-.746-1.666-1.666-1.666H13m-5 0c0 .92.746 1.666 1.667 1.666h1.666c.92 0 1.667-.746 1.667-1.666m-5 0C8 3.747 8.746 3 9.667 3h1.666C12.253 3 13 3.746 13 4.667M10.5 10.5H13m-2.5 3.333H13M8 10.5h.008M8 13.833h.008"
    />
  </Svg>
);

const Search = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#48474B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
  </Svg>
);

const PlusCircle = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#FDF8EF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);
export {BookOpened, DoubleSoup, Calendar, ClipBoardList, Search, PlusCircle};
