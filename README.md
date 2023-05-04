# App for testing some feature of Angular
fork of https://github.com/coryrylan/ng-pokedex
find in https://angularexpo.com/pokedex/


https://dev.to/jintoppy/creating-fullstack-todo-app-angularmaterialfirebasegithubactionunittesteslint-51k6

https://github.com/jintoppy/angular-firebase-todo


https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
https://github.com/angular/angularfire/blob/master/docs/database.md

https://firebase.google.com/docs/database/web/read-and-write?hl=fr
https://firebase.google.com/docs/web/setup?hl=fr&authuser=0

## configuration github <-> FireBase

https://github.com/marketplace/actions/deploy-to-firebase-hosting

https://dev.to/pprachit09/firebase-hosting-with-github-actions-55ka
firebaseServiceAccount Now this is required and you can find the same in your project settings. Go to https://console.firebase.google.com/u/1/project/{project-name}/settings/serviceaccounts/adminsdk and click on Generate new private key. Save the json file and add it in GitHub secrets.

For that, go to settings tab of your repository and select secrets from the left menu.
Click on New Secret. Give the Name as FIREBASE_SERVICE_ACCOUNT and in value field, paste the JSON copied in the Firebase project. Click on save.

## GitHub - How to Manually Trigger a GitHub Actions Workflow
https://levelup.gitconnected.com/how-to-manually-trigger-a-github-actions-workflow-4712542f1960

