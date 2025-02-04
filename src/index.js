import React from 'react';
import {Provider} from "react-redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configStore from './lib/redux/store'
import { ContextProvider } from './lib/socket-io/SocketContext';
// import {store} from './lib/redux/reducers'
import reportWebVitals from './reportWebVitals';
import { ApolloClient,ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

const store = configStore()
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
          <App />
      </Provider>
    </ApolloProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();