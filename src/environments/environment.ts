// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'chat-app-b9166',
    appId: '1:347702699338:web:cca08ca23c592840d88db3',
    databaseURL: 'https://chat-app-b9166-default-rtdb.firebaseio.com',
    storageBucket: 'chat-app-b9166.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDzs2MJ9-d_2mhCNn_uGecqLCAqTGyAjyQ',
    authDomain: 'chat-app-b9166.firebaseapp.com',
    messagingSenderId: '347702699338',
  },
  production: false,
  server : 'http://127.0.0.1:8000/api/',
  storageUrl: 'http://localhost:8000/storage/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
