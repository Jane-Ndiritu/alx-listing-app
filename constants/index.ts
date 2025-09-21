export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';

export const ENDPOINTS = {
  LISTINGS: `${API_BASE_URL}/listings`,
  USERS: `${API_BASE_URL}/users`,
  BOOKINGS: `${API_BASE_URL}/bookings`,
};

export const APP_CONFIG = {
  SITE_NAME: 'Airbnb Clone',
  DEFAULT_CURRENCY: 'USD',
  ITEMS_PER_PAGE: 10,
};

export const UI_TEXT = {
  NAV: {
    HOME: 'Home',
    LISTINGS: 'Listings',
    ABOUT: 'About',
    LOGIN: 'Log In',
    SIGNUP: 'Sign Up',
  },
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    LEARN_MORE: 'Learn More',
    SAVE: 'Save',
    CANCEL: 'Cancel',
  },
  MESSAGES: {
    LOADING: 'Loading...',
    ERROR: 'Something went wrong. Please try again.',
    EMPTY_LISTINGS: 'No listings available at the moment.',
  },
};
