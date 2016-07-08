# WeatherUI App

## Description

### Important Libraries
* Bootstrap + Bootstrap Angular UI
  * Although there are various newer, "sexier" options, Bootstrap is tried and true and simple to implement.
  One goal of this project is to have as minimal a back-end as possible; CSS libraries such as Semantic UI
   benefit more from additional Gulp scripting for theming and configuration, which I wanted to avoid.
   Finally, the Bootstrap Angular UI is well established and useful.
* Karma / Jasmine
  * Established libraries for running front-end tests.
* Leaflet
  * Necessary for displaying maps.
* Angular UI Router
  * I like the extra robustness that this module adds over angular's default routing capabilities. (Nested states)

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
 
## Instructions
To install. (Need NPM and Bower, preferably latest stable versions)
1. Clone project
2. Run npm install from package.json directory

## Other materials
Some other documentation was created in support of this project.
* Requirements
* Wireframes
