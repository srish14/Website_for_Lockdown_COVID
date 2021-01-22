import React from 'react'
import { Select, Search } from 'semantic-ui-react'

const AreaOptions = [
  { key: 'ar', value: 'ar', text: 'Annapurna Road,' },
  { key: 'bs', value: 'bs', text: 'Kanadia Road, BangaliSquare' },
  { key: 'bv', value: 'bv', text: 'Basant Vihar, Behind Bombay Hospital' },
  { key: 'ch', value: 'ch', text: 'Choithram Hospital, Manik Bagh Road' },
  { key: 'jm', value: 'jm', text: 'Jawahar Marg, North Rajmohalla' },
  { key: 'np', value: 'np', text: 'New Palasia,' },
  { key: 'nn', value: 'nn', text: 'Nemawar Rd, Navlakha' },
  { key: 'rh', value: 'rh', text: 'Ranjeet Hanuman Rd, Gumasta Nagar' },
  { key: 'sn', value: 'sn', text: 'Sapna Sangeeta Main Rd, Navlakha' },
  { key: 'vi', value: 'vi', text: 'Satya Sai Square, Vijay Nagar' },

]

const SelectArea = () => (
  <Select placeholder ='Select your area' options={AreaOptions} />
)

export default SelectArea;
