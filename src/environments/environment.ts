// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAi__QZqwgn0iFC-h0lugw9XWc2IpQe2nE",
    authDomain: "openapi-cameras-nantes.firebaseapp.com",
    databaseURL: "https://openapi-cameras-nantes.firebaseio.com",
    projectId: "openapi-cameras-nantes",
    storageBucket: "openapi-cameras-nantes.appspot.com",
    messagingSenderId: "578950092603"
  }
};
