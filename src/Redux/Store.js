import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AccountsDataReducer from './AccountsReducer';
import CountriesDataReducer from './CountryReducer';

const rootReducer = combineReducers({
  AccountsDataReducer,
  CountriesDataReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;
