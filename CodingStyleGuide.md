Coding Style Guide
==================

***

Comments
--------

### Top comment

```
<!-- /*
| _________________________________________________
|
|   Comment
| _________________________________________________
|
--> */
```

***

HTML
---------------

### Class names
Don't put framework class names in the HTML; extends them in CSS.

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

***
> Written with [StackEdit](https://stackedit.io/).
