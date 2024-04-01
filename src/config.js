const config = {
  local: {
    hostUrl: "http://localhost:3000/dev",
  },
  dev: {
    hostUrl: "https://dev-api.codemysketch.com",
  },
  prod: {
    hostUrl: "https://prod-api.codemysketch.com",
  },
};

const env =
  process.env.NODE_ENV === "production" ? process.env.REACT_APP_ENV : "local";
export default config[env];
