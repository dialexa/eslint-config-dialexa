Dialexa Javascript Style Guide
---

# Installation

```
 npm install @dialexa/eslint-config-dialexa --save-dev
```

Lastly, make sure you have [eslint](http://eslint.org) installed in your project

```
npm install eslint --save-dev
```

If you are using the React settings, make sure you have `babel-eslint` installed, as well as `eslint-plugin-react`

```
npm install babel-eslint eslint-plugin-react --save-dev
```

# Usage

Add one of the following to your project's `.eslintrc` file (based on your project type).

### ES5

```json
{
  "extends": "@dialexa/eslint-config-dialexa"
}
```

### ES6

```json
{
  "extends": "@dialexa/eslint-config-dialexa/es6"
}
```

### Node 4.x +

```json
{
  "extends": "@dialexa/eslint-config-dialexa/node-es6"
}
```

### Ember
```json
{
  "extends": "@dialexa/eslint-config-dialexa/ember"
}
```

### React
```json
{
  "extends": "@dialexa/eslint-config-dialexa/react"
}
```
