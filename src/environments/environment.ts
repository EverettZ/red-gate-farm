// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBNudnvOPYUCvMqyNT3tODaa8TEdSH70yI",
    authDomain: "red-gate-farm.firebaseapp.com",
    databaseURL: "https://red-gate-farm.firebaseio.com",
    projectId: "red-gate-farm",
    storageBucket: "red-gate-farm.appspot.com",
    messagingSenderId: "194844999694"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
