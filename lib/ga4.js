import ReactGA4 from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-51Y38PPW5G'; // Replace with your Measurement ID

export const initGA4 = () => {
  ReactGA4.initialize(GA_MEASUREMENT_ID);
};

export const useGA4PageView = (path) => {
  ReactGA4.send({ hitType: "pageview", page: path });
};
