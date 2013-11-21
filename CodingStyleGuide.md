
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

### Colors
Declare colors in var file but do not use them directly in your CSS. Instead, and a second level in var with elements color relied with basic colors.
```
@softWhite: rgb(245,245,245);
@softBlack: rgb(40,40,40);

@backgroundColor: @softBlack;
@buttonColor: @softWhite;
```

### Typography

#### Font size
Declare base font-size for html element and use REM.
```
html {
    font-size: 14px;
}
h1 {
    @include fontSize(20px);
}
```
```
@function calculateRem($size) {
    $remSize: $size / $rootFontSize;
    @return #{$remSize}rem;
}
@mixin fontSize($size) {
    font-size: $size;
    font-size: calculateRem($size);
}
```
#### Typography vars

```
/* Typographie Colors */
@baseTypeColor: $softBlack;
@warningTypeColor: $red;

/* Typographie */
@baseLineHeight: 1.5em !default;
@baseFontSize: 14px !default;
@baseFontFamily: OpenSans, sans-serif;
@baseTextColor: $softBlack;
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
