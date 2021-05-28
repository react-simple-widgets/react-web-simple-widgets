export const SNAP = 'SNAP';
export const HOTEL = 'HOTEL';

export const SnapStack = {
  Root: `${SNAP}-ROOT`,
  FlightHotelList: `${SNAP}-FlightHotelList`,
  FlightList: `${SNAP}-FlightList`,
  HotelDetail: `${SNAP}-HotelDetail`,
  TripDetail: `${SNAP}-TripDetail`,
  GuestDetail: `${SNAP}-GuestDetail`,
  BookerDetail: `${SNAP}-BookerDetail`,
  Checkout: `${SNAP}-Checkout`,
  SortAndFilter: `${SNAP}-SortAndFilter`,
};

export const HotelStack = {
  Root: `${HOTEL}-ROOT`,
  HotelList: `${HOTEL}-HotelList`,
  HotelDetail: `${HOTEL}-HotelDetail`,
  SortAndFilter: `${HOTEL}-SortAndFilter`,
  TripDetail: `${HOTEL}-TripDetail`,
  BookingDetail: `${HOTEL}-BookingDetail`,
  BookerDetail: `${HOTEL}-BookerDetail`,
  Checkout: `${HOTEL}-Checkout`,
  Error: `${HOTEL}-Error`,
};

export const Variant = {
  Error: 'error',
  Default: 'default',
  Success: 'success',
  Focus: 'focus',
  Info: 'info',
  Hint: 'hint',
};

export const Gender = {
  Male: 'Male',
  Female: 'Female',
};

export const GuestType = {
  Adult: 'adults',
  Children: 'children',
  Infants: 'infants',
};

export const KeyboardType = {
  Default: 'default',
  Numeric: 'numeric',
  Email: 'email-address',
  NumbersPunctuation: 'numbers-and-punctuation',
};

export const EMPTY_STATE = {
  EMPTY_HOTEL_LIST: 'empty_hotel_list',
  EMPTY_FLIGHT_HOTEL_SNAP: 'empty_flight_hotel_snap',
};

export const SCREEN_NAME = {
  Home: 'Home',
};

export const TOUCHABLE_AREA_DEBOUNCE_TIME = 500;
