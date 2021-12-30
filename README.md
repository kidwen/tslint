[![NPM @latest](https://img.shields.io/npm/v/@kidwen/tslint/latest?color=%2300AA00)](https://www.npmjs.com/package/@kidwen/tslint)

# usage

### eslint(recommend)

    // add .eslintrc.json
    {
        "extends": "@kidwen/tslint"
    }

### tslint(deprecated)

    // add tslint.json
    {
        "extends": "@kidwen/tslint/tslint.json",
        "rules": {
            "component-selector": [true, "element", "app", "kebab-case"],
            "deprecation": false
        },
        "rulesDirectory": ["codelyzer"]
    }

## publish

```bash
$ npm publish
```

-   publish to `https://registry.npmjs.org/`
-   no longer publish to [github](https://npm.pkg.github.com) repository

## install this package in your project

```bash
$ npm i @kidwen/tslint
```
