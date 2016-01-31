Dialexa Javascript Style Guide
---

# Installation

Since this package is not yet available on npm, you can use it by adding the line below to your package.json **devDependencies**

```json
 "eslint-config-dialexa": "dialexa/eslint-config-dialexa"
```

Lastly, make sure you have [eslint](http://eslint.org) installed in your project

```sh
npm install eslint --save-dev
```


# Usage

Add one of the following to your project's `.eslintrc` file (based on your project type).

### ES5

```json
{
  "extends": "dialexa"
}
```

### Node 4 and greater 

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
