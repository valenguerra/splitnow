import { AVATARS } from '../app/constants';
import avatar01 from '../assets/avatar01.png';
import avatar02 from '../assets/avatar02.png';
import avatar03 from '../assets/avatar03.png';
import avatar04 from '../assets/avatar04.png';
import avatar05 from '../assets/avatar05.png';
import avatar06 from '../assets/avatar06.png';
import avatar07 from '../assets/avatar07.png';
import avatar08 from '../assets/avatar08.png';
import avatar09 from '../assets/avatar09.png';
import avatar10 from '../assets/avatar10.png';
import avatar11 from '../assets/avatar11.png';
import avatar12 from '../assets/avatar12.png';
import avatar13 from '../assets/avatar13.png';
import avatar14 from '../assets/avatar14.png';
import avatar15 from '../assets/avatar15.png';
import avatar16 from '../assets/avatar16.png';
import avatar17 from '../assets/avatar17.png';
import avatar18 from '../assets/avatar18.png';
import avatar19 from '../assets/avatar19.png';
import avatar20 from '../assets/avatar20.png';
import avatar21 from '../assets/avatar21.png';
import avatar22 from '../assets/avatar22.png';
import avatar23 from '../assets/avatar23.png';
import avatar24 from '../assets/avatar24.png';
import avatar25 from '../assets/avatar25.png';
import avatar26 from '../assets/avatar26.png';
import avatar27 from '../assets/avatar27.png';
import avatar28 from '../assets/avatar28.png';
import avatar29 from '../assets/avatar29.png';
import avatar30 from '../assets/avatar30.png';
import avatar31 from '../assets/avatar31.png';
import avatar32 from '../assets/avatar32.png';
import avatar33 from '../assets/avatar33.png';
import avatar34 from '../assets/avatar34.png';
import avatar35 from '../assets/avatar35.png';
import avatar36 from '../assets/avatar36.png';
import avatar37 from '../assets/avatar37.png';
import avatar38 from '../assets/avatar38.png';
import avatar39 from '../assets/avatar39.png';
import avatar40 from '../assets/avatar40.png';
import avatar41 from '../assets/avatar41.png';
import avatar42 from '../assets/avatar42.png';
import avatar43 from '../assets/avatar43.png';
import avatar44 from '../assets/avatar44.png';

const images = [
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
  avatar16,
  avatar17,
  avatar18,
  avatar19,
  avatar20,
  avatar21,
  avatar22,
  avatar23,
  avatar24,
  avatar25,
  avatar26,
  avatar27,
  avatar28,
  avatar29,
  avatar30,
  avatar31,
  avatar32,
  avatar33,
  avatar34,
  avatar35,
  avatar36,
  avatar37,
  avatar38,
  avatar39,
  avatar40,
  avatar41,
  avatar42,
  avatar43,
  avatar44,
];

interface Props {
  id: number;
  small?: boolean;
}

export const Avatar = ({ id, small = false }: Props) => {
  if (id >= 0 && id <= images.length) {
    return <img src={images[id - 1]} alt={AVATARS[id - 1][0]} className={small ? 'h-4 w-4' : 'h-8 w-8'} />;
  }
  return <div className={`rounded-full bg-slate-200 ${small ? 'h-4 w-4' : 'h-8 w-8'}`} />;
};
