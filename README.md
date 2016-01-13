Dialexa Javascript Style Guide
---

# Installation

### Local Development/Testing
Since this package is not public yet, you must first [link](https://docs.npmjs.com/cli/link) it in order to include this module in your project.

```sh
# in the root directory of this package
npm link

# in the root directory of your project
npm link eslint-config-dialexa
```

Lastly, make sure you have [eslint](http://eslint.org) installed in your project
```sh
npm install eslint --save-dev
```


# Usage

Add one of the following to your project's `.eslintrc` file (based on your project type).

### General

```json
{
  "extends": "dialexa"
}
```

### ES6

```json
{
  "extends": "dialexa/node-es6"
}
```

### Ember
```json
{
  "extends": "dialexa/ember"
}
```

### React
```json
{
  "extends": "dialexa/react"
}
```
