Dialexa Javascript Style Guide
---

# Installation

```
 npm install --save-dev @dialexa/eslint-config-dialexa
```

Lastly, make sure you have [eslint](http://eslint.org) installed in your project

```
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

### ES6

```json
{
  "extends": "dialexa/es6"
}
```

### Node 4.x +

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
