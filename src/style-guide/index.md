---
title: Style Guide
type: style-guide
---

This is the official style guide for Realm Digital code. If you are a developer at Realm Digital, it's a great reference to avoid errors, bikeshedding, and anti-patterns.

We've split rules into four categories:


## Rule Categories

### Priority A: Essential

These rules help prevent errors, so learn and abide by them at all costs. Exceptions may exist, but should be very rare and only be made by those with buy-in from the rest of the team.

### Priority B: Strongly Recommended

These rules have been found to improve readability and/or developer experience in most projects. Your code will still run if you violate them, but violations should be rare and well-justified.

### Priority C: Recommended

Where multiple, equally good options exist, an arbitrary choice can be made to ensure consistency. In these rules, we describe each acceptable option and suggest a default choice. That means you can feel free to make a different choice in your own codebase, as long as you're consistent and have a good reason. Please do have a good reason though! By adapting to the community standard, you will:

1. train your brain to more easily parse most of the community code you encounter
2. be able to copy and paste most community code examples without modification
3. often find new hires are already accustomed to your preferred coding style

### Priority D: Use with Caution

Potentially dangerous patterns


## Priority A Rules: Essential (Error Prevention)

### Variable naming <sup data-p="a">essential</sup>

Naming things in software development is difficult.

Whether it is class names or function names, coming up with meaningful names allows the reader to infer intent at a glance.

Fortunately, the naming of variables, and to some extent parameters, should not suffer from a naming choice thought process most of the time.

This is because the name of the variable is built into the class/object type

Variables should most likely be common nouns.

If you can't use them in a sentence or using them in a sentence causes it to become complicated, then it is a bad name. E.g.

* Show me the “amount” //BAD, not descriptive enough
* Show me the “withdrawalAmount” //GOOD

{% raw %}<div class="style-example example-bad">{% endraw %}
#### Bad

``` js
var invoice = new Order();
var list = new List<Order>();
```

``` js
// Do not use faux abbrevitions/shortened words
var ord = new Order();
var img = new Image();
var num = 123;
```

``` js
var fred = new Dog();
```

``` js
// This is an obvious sign that the method/function is way to complicated and needs to be refactored into multiple methods
var supplimentaryBenefitOfFirstSupplimentaryBenefit = benefit.children[0].children[0];
```

``` js
// While grammatically correct, we can probably file this under “being clever”
var school  = new List<Fish>();
```


{% raw %}</div>{% endraw %}

{% raw %}<div class="style-example example-good">{% endraw %}
#### Good

``` js
var order = new Order();
var dog = new Dog();
```

``` js
var orders = new List<Order>();
var people = new List<Person>();
```
{% raw %}</div>{% endraw %}

### Magic strings & numbers <sup data-p="a">essential</sup>

Magic strings and numbers are values used in the middle of code blocks that require a certain amount of domain knowledge and context to understand what exactly they are and what they are used for

{% raw %}<div class="style-example example-bad">{% endraw %}
#### Bad

``` js
const hours = 15;
const minutes = hours * 60
```

``` js
if (product.type === 'ebook') {
   // code
}
```

{% raw %}</div>{% endraw %}

{% raw %}<div class="style-example example-good">{% endraw %}
#### Good

``` js
// potentially in some reusuable common helper file / library
const MINUTES_IN_AN_HOUR = 60;

// in your code
const hours = 15;
const minutes = hours * MINUTES_IN_AN_HOUR;
```

``` js

// potentially in some reusuable common helper file / library
const PRODUCT_TYPE_EBOOK = 'ebook';

// in your code

if (product.type === PRODUCT_TYPE_EBOOK) {
   // code
}
```

{% raw %}</div>{% endraw %}

## Priority B Rules: Strongly Recommended (Improving Readability)


## Priority C Rules: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)


## Priority D Rules: Use with Caution (Potentially Dangerous Patterns)


{% raw %}
<script>
(function () {
  var enforcementTypes = {
    none: '<span title="There is unfortunately no way to automatically enforce this rule.">self-discipline</span>',
    runtime: 'runtime error',
    linter: '<a href="https://github.com/vuejs/eslint-plugin-vue#eslint-plugin-vue" target="_blank" rel="noopener noreferrer">plugin:vue/recommended</a>'
  }
  Vue.component('sg-enforcement', {
    template: '\
      <span>\
        <strong>Enforcement</strong>:\
        <span class="style-rule-tag" v-html="humanType"/>\
      </span>\
    ',
    props: {
      type: {
        type: String,
        required: true,
        validate: function (value) {
          Object.keys(enforcementTypes).indexOf(value) !== -1
        }
      }
    },
    computed: {
      humanType: function () {
        return enforcementTypes[this.type]
      }
    }
  })

  // new Vue({
  //  el: '#main'
  // })
})()
</script>
{% endraw %}
