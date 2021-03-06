import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';

import AppComponent from './app.component';
import Components from './components/components';

import{ RootReducer } from './reducers/index';

// import configureStore from "./store/configureStore";
// const store = configureStore();

angular.module("myApp", [
    uiRouter,
    ngRedux,
    // Common.name,
    Components.name
])
.config(( $ngReduxProvider ) => {
  "ngInject";

  /* eslint-disable */
   $ngReduxProvider.createStoreWith(RootReducer, [], [window['devToolsExtension']()]);
  /* eslint-enable */
})

.directive("app", AppComponent);
