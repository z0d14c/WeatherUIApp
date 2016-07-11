# WeatherUI App

## Description
This app is meant to enable weather nerds to look at weather-related data for a given location.
Simply type in a location address or name, select it, enter a date/time and view the precipitation data your heart desires.

### Important Libraries
* Bootstrap
  * Although there are various newer, "sexier" options, Bootstrap is tried and true and simple to implement.
  One goal of this project is to have as minimal a back-end as possible; CSS libraries such as Semantic UI
   benefit more from additional Gulp scripting for theming and configuration, which I wanted to avoid.
   Finally, the Bootstrap Angular UI is well established and useful.
* Karma / Jasmine
  * Established libraries for running front-end tests.
* Leaflet
  * Necessary for displaying maps.
* Angular UI Router
  * I like the extra robustness that this module adds over angular's default routing capabilities. (Nested states etc.)
* Plotly
  * Used for charting temperature on weatherdata page

### Directory Structure
* root // contains configuration files, readme, and basic node server
  * app // client code, organized by feature (rather than by file type) + styles (under "assets") and index.html
    * core // core modules -- these are "shared" modules that aren't tied to one feature
    * layout // layout files, such as header directive
    * lib // lib files that aren't managed via bower and/or their their angular wrappers
    * main // main page files (this is the page you land on when you open the app)
    * weather // weather page files (the page that displays data for a selected location)
    * maps // map service files, logic concerning the map and related leaflet/mapbox data
* e2e-tests // config for integration testing (currently unused) and mock data

### Future Improvements
* ES6 / Babel
  * One of the highest priorities would be getting newer JavaScript features into the project.
* LESS (Or SASS..)
  * Using a CSS preprocessor would be necessary for keeping the CSS manageable. Ability to use variables and
  functions etc. are necessary in almost anything that isn't a prototype over the long-term.
* Packaging (Minification/uglification, optimization, etc.)
  * As we think more about a production application, a packaging step would need to be implemented.
 * Code linting/vetting
  * Enforcing a uniform and clean code style is easier if linting systems such as JSCS are 
  integrated in the project's scripting (i.e. runs when serving or testing).
* error-handling and edge cases, validation
  * It's pretty easy to break the app right now or do silly things -- e.g. not filling in a date/time.
  A production app needs significantly more error-handling and such.
 
## Instructions
`this notation means run this command from root directory (unless another directory is specified)`
To install. (Need NPM and Bower, preferably latest stable versions)
1. Clone project
2. `npm install`
  * Bower install should run as part of npm script, if it doesn't you should run that as well

To run. 
1. `node server.js`
  * server will start on port 3000

To test.
1. `npm test`

To build (wire up new css/js files, including Bower dependencies)
1. `gulp build`

## Other materials
Some other documentation was created in support of this project.
*Note: not necessarily adhered to 100%*
* [Requirements](https://docs.google.com/document/d/1bTILx4aro_pBGEOFRyUbwKcp_GYmE1MPYEVDo6blY9Q/edit?usp=sharing)
* [Wireframes]()

## Screenshots

![](http://i.imgur.com/oyZBBBb.png)
![](https://www.lucidpress.com/invitations/accept/b5652180-7078-47ef-98a3-eb7ea5d49200)


