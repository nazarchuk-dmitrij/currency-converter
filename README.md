# currency-converter

## Live Demo
[Is available here](https://dmytro-nazarchuk-currency-converter.netlify.app/)

## Additional info for reviewers
It took me approximately 4 hours to finish this task. 

Since the application itself is not big, I decided to use only necessary tools. That's why I did not use any CSS preprocessors, as well as UI frameworks and libraries.

I had big plans for this application, but during the course of development, I had to abandon a few ideas.

Things that I would have done if I had more time to work on this application:
- Add some kind of validation of user's input
- Add better error handling for API (remembered about it during writing of this paragraph)
- Broke down CurrencyConverter to more child components
- Add option to check exchange rate from the past
- Write unit tests
- Refactor CSS, by, among other things, using custom variables

PS: I thought about adding flags for each currencies beforehand, so I prepared sprite and classes for each flag one day before I started working on this task. That's why it took me like 15 minutes to add Flag component to this app - because I already had sprite and classes prepared.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
