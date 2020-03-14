const PROD = {
  url: {
    API_URL: "https://quiet-atoll-11306.herokuapp.com/api"
  }
};

const DEV = {
  url: {
    API_URL: "http://localhost:3030/api"
  }
};

export const config = process.env.NODE_ENV === "development" ? DEV : PROD;
