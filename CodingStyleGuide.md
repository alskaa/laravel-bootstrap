
Coding Style Guide
==================

Comments
--------

### Big title

```
<!-- /*
| _________________________________________________
|
|   Big title
| _________________________________________________
|
--> */
```
### Big title with description

```
<!-- /*
| _________________________________________________
|
|   Big title
| _________________________________________________
|
|   Description goes here
|
--> */
```
### Small title
```
/* Small title
-------------- */
```

***

HTML
---------------

### Class names
Don't put framework class names in the HTML; extends them in CSS.
```
<div class="layout--module">
    <a class="layout--module-links">Trigger</a>
</div>
```
```
.layout--module {
    &:extend(.col-md-6);
    &:extend(.col-md-offset-1);
}
.layout--module-links {
    &:extend(.btn);
    &:extend(.btn-default);
    &:extend(.btn-xs);
}
```

***

CSS (LESS/SASS)
---------------

### Bootstrap / Foundation

Extend vendor class in the stylesheet (not in HTML)
```
.container {
    &:extend(.col-md-6);
}
```

***

JAVASCRIPT
----------

### Selector
Don't use CSS class name to select object in JS, use data-js attribute instead.
```
<button class="signup--submit-button" data-js="signup">Sign Up</button>
```
```
$('button[data-js=signup]').click(signUp);
```

> Written with [StackEdit](https://stackedit.io/).
