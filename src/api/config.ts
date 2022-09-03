/**
 * MODULES
 */
import axios from 'axios';

/**
 * CONSTANTS
 */
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;


export default axios.create({
  baseURL: `${REACT_APP_API_URL}/${REACT_APP_API_KEY}`,
  headers: {
    'Content-type': 'application/json'
  }
});