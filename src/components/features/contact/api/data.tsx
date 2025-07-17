import { ContactType, InputType } from './type';
import { FaPhoneAlt, FaEnvelope, FaMapMarker } from 'react-icons/fa';

export const infos: ContactType[] = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone & WhatsApp',
    description: '(+237) 658 527 973',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    description: 'bricefrkc@gmail.com',
  },
  {
    icon: <FaMapMarker />,
    title: 'Location',
    description: 'Yaounde, Cameroon',
  },
];

export const inputs: InputType[] = [
  { type: 'firstname', placeholder: 'First Name' },
  { type: 'lastname', placeholder: 'Last Name' },
  { type: 'email', placeholder: 'Email Address' },
  { type: 'phone', placeholder: 'Phone Number' },
];
