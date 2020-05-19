# FastHttpCache

## Overview

This is a sample app that follows the short tutorial for setting up `localStorage` caching in an angular project that Stephen Fluin shared on YouTube in [the Demos with Angular channel.](https://www.youtube.com/watch?v=Yf1FfhMetjs)

The branch original shows the end result from the video tutorial.

The branch master shows an updated version that implements a few improvements that should make this approach more useable in a real application.

Added the `shareReplay` config object with `refCount: true`, after reading [this very helpful article by Nicholas Jamieson](https://ncjamieson.com/whats-changed-with-sharereplay/) and also added [the recommended tslint rules.](https://github.com/cartant/rxjs-tslint-rules#rxjs-no-sharereplay) Thanks to [@Simon_Weaver](https://stackoverflow.com/users/16940/simon-weaver) who shared a link to Nicholas' article in [this StackOverflow thread](https://stackoverflow.com/questions/47926240/when-should-i-use-publishreplay-vs-sharereplay/53979783#53979783).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
