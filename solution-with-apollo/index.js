import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// set up Apollo client - the 'uri' is like our fetch url
const client = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  // it's best to wrap the entire App in the Apollo client
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
