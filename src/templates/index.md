---
title: Templates
type: templates
---

These are the official file templates for Realm Digital projects.

## Javascript General

### Install prettier

```shell script
yarn add --dev prettier husky lint-staged
```

### package.json

``` json
"lint-staged": {
  "*.{js}": [
    "prettier --write",
    "git add"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
```

### .prettierrc

``` js
{
    "tabWidth": 4,
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "arrowParens": "avoid",
    "trailingComma": "all",
    "printWidth": 120
}
```

## Nuxt

Includes [Javascript General](#Javascript-General)

### Install lint-staged

```shell script
yarn add --dev lint-staged
```

### package.json

``` json
"lint-staged": {
  "*.{js,vue}": [
    "prettier --write",
    "eslint --fix",
    "git add"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
```

### .eslintrc.js

``` js
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        curly: 'error',
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                    normal: 'any',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
    },
}
```

## PHP

Includes [Javascript General](#Javascript-General)

### Install PHP CS Fixer

```shell script
composer require friendsofphp/php-cs-fixer --dev
```

lint-staged

### package.json

``` json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.php": [
    "php ./bin/php-cs-fixer fix --config .php_cs",
    "git add"
  ],
  "*.js": [
    "prettier --write",
    "git add"
  ]
}
```


### .php_cs

``` php
<?php

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude(['bootstrap', 'storage', 'vendor', 'node_modules', 'app'])
    ->name('*.php')
    ->notName('*.blade.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

return PhpCsFixer\Config::create()
    ->setRules([
        '@Symfony' => true,
        'yoda_style' => false,
        'array_syntax' => ['syntax' => 'short'],
        'ordered_imports' => ['sortAlgorithm' => 'alpha'],
        'no_unused_imports' => true,
    ])
    ->setFinder($finder);

```
