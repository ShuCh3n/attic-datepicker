(function(){"use strict";try{var n=document.createElement("style");n.appendChild(document.createTextNode(`@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
@media (min-width: 768px) {
.attic-datepicker-calendar::before {
            --attic-datepicker-calendar: 0px;
            content: '';
            position: absolute;
            top: 0px;
            height: 1rem;
            width: 1rem;
            border-width: 1px;
            border-color: rgb(0 0 0 / .1);
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255 / var(--tw-bg-opacity));
            --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            transform: translate(50%, -50%) rotate(-45deg);
            -webkit-clip-path: polygon(
                calc(var(--attic-datepicker-calendar) * -1) calc(var(--attic-datepicker-calendar) * -1),
                calc(100% + var(--attic-datepicker-calendar)) calc(var(--attic-datepicker-calendar) * -1),
                calc(100% + var(--attic-datepicker-calendar))
                calc(100% + var(--attic-datepicker-calendar))
            );
                    clip-path: polygon(
                calc(var(--attic-datepicker-calendar) * -1) calc(var(--attic-datepicker-calendar) * -1),
                calc(100% + var(--attic-datepicker-calendar)) calc(var(--attic-datepicker-calendar) * -1),
                calc(100% + var(--attic-datepicker-calendar))
                calc(100% + var(--attic-datepicker-calendar))
            );
}
.attic-datepicker-calendar.place-left::before {
                left: 2rem;
}
.attic-datepicker-calendar.place-right::before {
                right: 1.25rem;
}
}


/*
! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container{
  width: 100%;
}

@media (min-width: 640px){

  .container{
    max-width: 640px;
  }
}

@media (min-width: 768px){

  .container{
    max-width: 768px;
  }
}

@media (min-width: 1024px){

  .container{
    max-width: 1024px;
  }
}

@media (min-width: 1280px){

  .container{
    max-width: 1280px;
  }
}

@media (min-width: 1536px){

  .container{
    max-width: 1536px;
  }
}

.visible{
  visibility: visible;
}

.fixed{
  position: fixed;
}

.absolute{
  position: absolute;
}

.relative{
  position: relative;
}

.top-0{
  top: 0px;
}

.right-0{
  right: 0px;
}

.left-0{
  left: 0px;
}

.top-auto{
  top: auto;
}

.right-auto{
  right: auto;
}

.z-\\[99\\]{
  z-index: 99;
}

.z-0{
  z-index: 0;
}

.z-10{
  z-index: 10;
}

.col-span-2{
  grid-column: span 2 / span 2;
}

.mx-auto{
  margin-left: auto;
  margin-right: auto;
}

.mt-6{
  margin-top: 1.5rem;
}

.block{
  display: block;
}

.inline{
  display: inline;
}

.flex{
  display: flex;
}

.table{
  display: table;
}

.grid{
  display: grid;
}

.contents{
  display: contents;
}

.hidden{
  display: none;
}

.h-full{
  height: 100%;
}

.h-4{
  height: 1rem;
}

.h-10{
  height: 2.5rem;
}

.h-12{
  height: 3rem;
}

.h-screen{
  height: 100vh;
}

.h-auto{
  height: auto;
}

.max-h-72{
  max-height: 18rem;
}

.min-h-screen{
  min-height: 100vh;
}

.w-full{
  width: 100%;
}

.w-4{
  width: 1rem;
}

.w-10{
  width: 2.5rem;
}

.w-3{
  width: 0.75rem;
}

.w-1\\/2{
  width: 50%;
}

.w-12{
  width: 3rem;
}

.w-48{
  width: 12rem;
}

.w-32{
  width: 8rem;
}

.w-6{
  width: 1.5rem;
}

.w-5{
  width: 1.25rem;
}

.w-1{
  width: 0.25rem;
}

.w-auto{
  width: auto;
}

.w-60{
  width: 15rem;
}

.max-w-sm{
  max-width: 24rem;
}

.max-w-md{
  max-width: 28rem;
}

.flex-1{
  flex: 1 1 0%;
}

.border-collapse{
  border-collapse: collapse;
}

.translate-y-3{
  --tw-translate-y: 0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-0{
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-pointer{
  cursor: pointer;
}

.resize{
  resize: both;
}

.grid-cols-7{
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.grid-cols-2{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-1{
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-3{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.flex-col{
  flex-direction: column;
}

.items-start{
  align-items: flex-start;
}

.items-center{
  align-items: center;
}

.justify-end{
  justify-content: flex-end;
}

.justify-center{
  justify-content: center;
}

.justify-between{
  justify-content: space-between;
}

.gap-3{
  gap: 0.75rem;
}

.gap-y-8{
  row-gap: 2rem;
}

.gap-x-10{
  -moz-column-gap: 2.5rem;
       column-gap: 2.5rem;
}

.gap-x-8{
  -moz-column-gap: 2rem;
       column-gap: 2rem;
}

.gap-y-12{
  row-gap: 3rem;
}

.gap-y-0{
  row-gap: 0px;
}

.space-y-8 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.space-y-5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}

.space-y-12 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(3rem * var(--tw-space-y-reverse));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-x-5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(1.25rem * var(--tw-space-x-reverse));
  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}

.space-x-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-0 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0px * var(--tw-space-y-reverse));
}

.space-x-8 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

.divide-x > :not([hidden]) ~ :not([hidden]){
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}

.overflow-hidden{
  overflow: hidden;
}

.overflow-x-auto{
  overflow-x: auto;
}

.overflow-y-auto{
  overflow-y: auto;
}

.overflow-x-hidden{
  overflow-x: hidden;
}

.rounded-lg{
  border-radius: 0.5rem;
}

.rounded{
  border-radius: 0.25rem;
}

.rounded-full{
  border-radius: 9999px;
}

.rounded-xl{
  border-radius: 0.75rem;
}

.border{
  border-width: 1px;
}

.border-4{
  border-width: 4px;
}

.border-2{
  border-width: 2px;
}

.border-8{
  border-width: 8px;
}

.border-b-2{
  border-bottom-width: 2px;
}

.border-attic-primary{
  --tw-border-opacity: 1;
  border-color: rgb(166 108 255 / var(--tw-border-opacity));
}

.border-yellow-400{
  --tw-border-opacity: 1;
  border-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.border-orange-500{
  --tw-border-opacity: 1;
  border-color: rgb(249 115 22 / var(--tw-border-opacity));
}

.border-blue-700{
  --tw-border-opacity: 1;
  border-color: rgb(29 78 216 / var(--tw-border-opacity));
}

.border-blue-600{
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-red-500{
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-gray-100{
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-attic-primary{
  --tw-bg-opacity: 1;
  background-color: rgb(166 108 255 / var(--tw-bg-opacity));
}

.bg-gray-200{
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-attic-fourth{
  --tw-bg-opacity: 1;
  background-color: rgb(177 225 255 / var(--tw-bg-opacity));
}

.bg-\\[\\#FF5F5F\\]{
  --tw-bg-opacity: 1;
  background-color: rgb(255 95 95 / var(--tw-bg-opacity));
}

.bg-yellow-100{
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity));
}

.bg-gray-700{
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.bg-orange-400{
  --tw-bg-opacity: 1;
  background-color: rgb(251 146 60 / var(--tw-bg-opacity));
}

.bg-blue-500{
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.object-cover{
  -o-object-fit: cover;
     object-fit: cover;
}

.p-3{
  padding: 0.75rem;
}

.p-2{
  padding: 0.5rem;
}

.p-5{
  padding: 1.25rem;
}

.py-3{
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-5{
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.px-6{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.px-2{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-16{
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.px-3{
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-5{
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-8{
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-6{
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.py-14{
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.px-0{
  padding-left: 0px;
  padding-right: 0px;
}

.pl-3{
  padding-left: 0.75rem;
}

.pr-12{
  padding-right: 3rem;
}

.pt-6{
  padding-top: 1.5rem;
}

.pt-8{
  padding-top: 2rem;
}

.text-center{
  text-align: center;
}

.align-middle{
  vertical-align: middle;
}

.font-\\[Comfortaa\\]{
  font-family: Comfortaa;
}

.font-\\[\\'Comfortaa\\'\\]{
  font-family: 'Comfortaa';
}

.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xs{
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-4xl{
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-2xl{
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-xl{
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-6xl{
  font-size: 3.75rem;
  line-height: 1;
}

.font-bold{
  font-weight: 700;
}

.font-semibold{
  font-weight: 600;
}

.ordinal{
  --tw-ordinal: ordinal;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.text-gray-400{
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-attic-primary{
  --tw-text-opacity: 1;
  color: rgb(166 108 255 / var(--tw-text-opacity));
}

.text-gray-700{
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-purple-600{
  --tw-text-opacity: 1;
  color: rgb(147 51 234 / var(--tw-text-opacity));
}

.underline{
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.opacity-0{
  opacity: 0;
}

.opacity-100{
  opacity: 1;
}

.shadow{
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg{
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl{
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-attic-primary\\/50{
  --tw-shadow-color: rgb(166 108 255 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-attic-primary{
  --tw-shadow-color: #A66CFF;
  --tw-shadow: var(--tw-shadow-colored);
}

.outline{
  outline-style: solid;
}

.drop-shadow-xl{
  --tw-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow{
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition-colors{
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition{
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-200{
  transition-duration: 200ms;
}

.duration-150{
  transition-duration: 150ms;
}

.ease-out{
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.ease-in{
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.hover\\:rounded-full:hover{
  border-radius: 9999px;
}

.hover\\:bg-gray-100:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-attic-secondary:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(156 158 254 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-200:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.hover\\:bg-attic-thirdly:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(175 180 255 / var(--tw-bg-opacity));
}

.hover\\:bg-red-600:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}

.hover\\:bg-blue-600:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.hover\\:text-white:hover{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.focus\\:outline-none:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

@media (min-width: 640px){

  .sm\\:hidden{
    display: none;
  }

  .sm\\:gap-y-12{
    row-gap: 3rem;
  }

  .sm\\:pt-8{
    padding-top: 2rem;
  }
}

@media (min-width: 768px){

  .md\\:absolute{
    position: absolute;
  }

  .md\\:top-auto{
    top: auto;
  }

  .md\\:right-auto{
    right: auto;
  }

  .md\\:flex{
    display: flex;
  }

  .md\\:h-auto{
    height: auto;
  }

  .md\\:w-auto{
    width: auto;
  }

  .md\\:w-60{
    width: 15rem;
  }

  .md\\:items-start{
    align-items: flex-start;
  }

  .md\\:items-center{
    align-items: center;
  }

  .md\\:justify-between{
    justify-content: space-between;
  }

  .md\\:space-y-2 > :not([hidden]) ~ :not([hidden]){
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]){
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]){
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]){
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:overflow-x-hidden{
    overflow-x: hidden;
  }

  .md\\:rounded-\\[28px\\]{
    border-radius: 28px;
  }

  .md\\:border-8{
    border-width: 8px;
  }

  .md\\:py-14{
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  .md\\:px-0{
    padding-left: 0px;
    padding-right: 0px;
  }

  .md\\:text-center{
    text-align: center;
  }

  .md\\:text-6xl{
    font-size: 3.75rem;
    line-height: 1;
  }

  .md\\:text-2xl{
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .md\\:text-sm{
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:text-lg{
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .md\\:text-4xl{
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .md\\:shadow-xl{
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}

@media (min-width: 1024px){

  .lg\\:grid-cols-2{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\\:grid-cols-3{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:gap-y-0{
    row-gap: 0px;
  }

  .lg\\:gap-x-10{
    -moz-column-gap: 2.5rem;
         column-gap: 2.5rem;
  }

  .lg\\:gap-x-8{
    -moz-column-gap: 2rem;
         column-gap: 2rem;
  }
}

@media (min-width: 1280px){

  .xl\\:px-0{
    padding-left: 0px;
    padding-right: 0px;
  }
}`)),document.head.appendChild(n)}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { computed, inject, openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString, normalizeClass, createCommentVNode, ref, provide, watch, resolveComponent, withDirectives, createVNode, vShow, resolveDirective, renderSlot, mergeProps, Transition, withCtx, createBlock } from "vue";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import isBetween from "dayjs/plugin/isBetween";
const usePreviousDate = (date) => {
  const display = [];
  for (let i = 0; i <= date.date(0).day(); i++) {
    display.push(date.date(0).subtract(i, "day"));
  }
  return display.sort((a, b) => a.date() - b.date());
};
const useCurrentDate = (date) => {
  return Array.from(
    {
      length: date.daysInMonth()
    },
    (v, k) => date.date(k + 1)
  );
};
const useDirective = (binding) => {
  const { instance, arg, value } = binding;
  document.body.addEventListener("click", ($event) => {
    if (instance.$el.contains($event.target)) {
      return instance.showCalendar = true;
    }
    instance.showCalendar = instance.$el.contains($event.target) || document.getElementById(value) === $event.target || value === $event.target;
  });
};
const useCalendar = () => {
  const calendar = computed(() => {
    return {
      monthView: {
        date: (inputDate) => {
          return usePreviousDate(inputDate).concat(useCurrentDate(inputDate));
        }
      }
    };
  });
  return {
    calendar
  };
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {
  name: "YearCalendar",
  setup(props, { emit }) {
    inject("atticDatepicker");
    const calendarView = inject("calendarView");
    const years = computed(() => {
      const years2 = [];
      const startYear = parseInt(dayjs().add(5, "years").subtract(105, "years").format("YYYY"));
      for (let i = 0; i <= 105; i++) {
        years2.push(startYear + i);
      }
      return years2.reverse();
    });
    const selectYear = (year) => {
      calendarView.value.date.value = calendarView.value.date.value.year(year);
      emit("changeView", "dates");
    };
    return {
      years,
      selectYear,
      dayjs
    };
  }
};
const _hoisted_1$3 = { class: "flex-1" };
const _hoisted_2$3 = { class: "max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm" };
const _hoisted_3$3 = ["onClick"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.years, (year) => {
        return openBlock(), createElementBlock("button", {
          class: "w-full hover:bg-attic-thirdly rounded-xl py-3 hover:text-white",
          onClick: ($event) => $setup.selectYear(year)
        }, toDisplayString(year), 9, _hoisted_3$3);
      }), 256))
    ])
  ]);
}
const YearsCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  name: "MonthsCalendar",
  setup(props, { emit }) {
    inject("atticDatepicker");
    const calendarView = inject("calendarView");
    const selectMonth = (month) => {
      calendarView.value.date.value = calendarView.value.date.value.month(month);
      emit("changeView", "dates");
    };
    return {
      selectMonth,
      dayjs
    };
  }
};
const _hoisted_1$2 = { class: "flex-1" };
const _hoisted_2$2 = { class: "grid grid-cols-2 gap-3 font-bold text-sm w-full" };
const _hoisted_3$2 = ["onClick"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", _hoisted_2$2, [
      (openBlock(), createElementBlock(Fragment, null, renderList(12, (month) => {
        return createElementVNode("button", {
          class: "rounded-xl py-3 hover:bg-attic-thirdly hover:text-white px-2",
          onClick: ($event) => $setup.selectMonth(month - 1)
        }, toDisplayString($setup.dayjs().month(month - 1).format("MMMM")), 9, _hoisted_3$2);
      }), 64))
    ])
  ]);
}
const MonthsCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "MonthCalendar",
  setup(props, { emit }) {
    const calendarView = inject("calendarView");
    const atticDatepicker = inject("atticDatepicker");
    const showCalendar = inject("showCalendar");
    const monthDays = inject("monthDays");
    const date = inject("date");
    const isSameMonth = (day) => {
      return day.isSame(date.value.format("YYYY-MM"), "month");
    };
    const isSelectedDay = (day) => {
      return atticDatepicker.selectedDate.value && atticDatepicker.selectedDate.value.isSame(day) || atticDatepicker.selectedEndDate.value && atticDatepicker.selectedEndDate.value.isSame(day);
    };
    const isInBetweenRange = (day) => {
      return atticDatepicker.isRange && (atticDatepicker.selectedDate.value && atticDatepicker.selectedEndDate.value) && day.isBetween(atticDatepicker.selectedDate.value, atticDatepicker.selectedEndDate.value);
    };
    const selectDate = (day) => {
      atticDatepicker.selectDate(day);
      showCalendar.value = !atticDatepicker.ableToClose();
    };
    return {
      atticDatepicker,
      calendarView,
      isSameMonth,
      isInBetweenRange,
      isSelectedDay,
      dayjs,
      monthDays,
      date,
      selectDate
    };
  }
};
const _hoisted_1$1 = { class: "flex-1 flex" };
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ createElementVNode("g", null, [
    /* @__PURE__ */ createElementVNode("path", { d: "M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835\n                          l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425\n                          c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564\n                          s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978\n                          L213.13,222.409z" })
  ])
], -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _hoisted_4$1 = { class: "space-y-5" };
const _hoisted_5$1 = { class: "text-center font-bold" };
const _hoisted_6$1 = { class: "grid grid-cols-7" };
const _hoisted_7 = { class: "font-semibold text-sm text-gray-400 text-center" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = {
  key: 1,
  class: "h-full w-full bg-gray-100 absolute z-0"
};
const _hoisted_11 = /* @__PURE__ */ createElementVNode("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ createElementVNode("g", null, [
    /* @__PURE__ */ createElementVNode("path", { d: "M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264\n                    c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168\n                    c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413\n                    c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864\n                    c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z" })
  ])
], -1);
const _hoisted_12 = [
  _hoisted_11
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.calendarView.subtractMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, _hoisted_3$1),
    createElementVNode("div", _hoisted_4$1, [
      createElementVNode("h2", _hoisted_5$1, [
        createElementVNode("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("changeView", "months"))
        }, toDisplayString($setup.date.format("MMMM")), 1),
        createElementVNode("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("changeView", "years"))
        }, toDisplayString($setup.date.format("YYYY")), 1)
      ]),
      createElementVNode("div", _hoisted_6$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.dayjs.weekdaysMin(), (weekDay) => {
          return openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(weekDay), 1);
        }), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.monthDays, (day) => {
          return openBlock(), createElementBlock("div", null, [
            $setup.isSameMonth(day) ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createElementVNode("div", {
                class: "mx-auto border-primary cursor-pointer font-bold text-sm relative",
                onClick: ($event) => $setup.selectDate(day)
              }, [
                $setup.atticDatepicker.isRange && $setup.isSelectedDay(day) && ($setup.atticDatepicker.selectedDate.value && $setup.atticDatepicker.selectedEndDate.value) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["h-full w-1/2 bg-gray-100 absolute z-0", [
                    { "right-0": $setup.atticDatepicker.isRange && $setup.atticDatepicker.selectedDate.value && $setup.atticDatepicker.selectedDate.value.isSame(day) },
                    { "left-0": $setup.atticDatepicker.isRange && $setup.atticDatepicker.selectedEndDate.value && $setup.atticDatepicker.selectedEndDate.value.isSame(day) }
                  ]])
                }, null, 2)) : createCommentVNode("", true),
                $setup.isInBetweenRange(day) ? (openBlock(), createElementBlock("div", _hoisted_10)) : createCommentVNode("", true),
                createElementVNode("span", {
                  class: normalizeClass(["z-10 block relative text-center align-middle hover:rounded-full block w-12 h-12 text-center align-middle flex items-center justify-center", [
                    { "bg-attic-primary text-white rounded-full": $setup.isSelectedDay(day) },
                    { "hover:bg-gray-200": !$setup.isSelectedDay(day) }
                  ]])
                }, toDisplayString(day.format("DD")), 3)
              ], 8, _hoisted_9)
            ])) : createCommentVNode("", true)
          ]);
        }), 256))
      ])
    ]),
    createElementVNode("button", {
      onClick: _cache[3] || (_cache[3] = ($event) => $setup.calendarView.addMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, _hoisted_12)
  ]);
}
const DatesCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "Calendar",
  props: {
    date: Object
  },
  components: {
    YearsCalendar,
    MonthsCalendar,
    DatesCalendar
  },
  setup(props) {
    const { calendar } = useCalendar();
    const displayView = ref("dates");
    const monthDays = computed(() => calendar.value.monthView.date(props.date));
    const date = ref(props.date);
    provide("date", date);
    provide("monthDays", monthDays);
    const changeView = (view) => {
      displayView.value = view;
    };
    watch(() => props.date, (value, prevValue) => {
      date.value = value;
    });
    return {
      displayView,
      changeView
    };
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_YearsCalendar = resolveComponent("YearsCalendar");
  const _component_MonthsCalendar = resolveComponent("MonthsCalendar");
  const _component_DatesCalendar = resolveComponent("DatesCalendar");
  return openBlock(), createElementBlock("div", null, [
    withDirectives(createVNode(_component_YearsCalendar, { onChangeView: $setup.changeView }, null, 8, ["onChangeView"]), [
      [vShow, $setup.displayView === "years"]
    ]),
    withDirectives(createVNode(_component_MonthsCalendar, { onChangeView: $setup.changeView }, null, 8, ["onChangeView"]), [
      [vShow, $setup.displayView === "months"]
    ]),
    withDirectives(createVNode(_component_DatesCalendar, { onChangeView: $setup.changeView }, null, 8, ["onChangeView"]), [
      [vShow, $setup.displayView === "dates"]
    ])
  ]);
}
const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
class Datepicker {
  constructor(date, format, isRange, keepOpen) {
    __publicField(this, "modelValue");
    __publicField(this, "selectedDate");
    __publicField(this, "selectedEndDate");
    __publicField(this, "isRange");
    __publicField(this, "keepOpen");
    __publicField(this, "format");
    this.modelValue = ref(null);
    this.selectedDate = ref(null);
    this.selectedEndDate = ref(null);
    this.keepOpen = keepOpen;
    this.isRange = isRange;
    this.format = format;
    watch(() => this.selectedDate.value, (value, prevValue) => {
      this.getValue();
    });
    watch(() => this.selectedEndDate.value, (value, prevValue) => {
      this.getValue();
    });
    this.setDates(date);
  }
  setDates(date) {
    if (date) {
      if (typeof date == "string") {
        this.selectedDate.value = dayjs(date);
        return;
      }
      if (typeof date == "object" && this.isRange) {
        this.selectedDate.value = dayjs(date[0]);
        if (date.length > 1) {
          this.selectedEndDate.value = dayjs(date[1]);
        }
      }
    }
  }
  selectDate(date) {
    if (!this.isRange) {
      this.selectedDate.value = date;
      return;
    }
    if (this.selectedDate.value && this.selectedEndDate.value) {
      this.selectedDate.value = date;
      this.selectedEndDate.value = null;
      return;
    }
    if (!this.selectedDate.value || date.diff(this.selectedDate.value, "day") < 0) {
      this.selectedDate.value = date;
      return;
    }
    if (date.diff(this.selectedDate.value, "day") > 0) {
      this.selectedEndDate.value = date;
    }
  }
  ableToClose() {
    if (!this.keepOpen) {
      if (this.isRange && this.selectedDate.value && this.selectedEndDate.value) {
        return true;
      }
      if (!this.isRange) {
        return true;
      }
    }
    return false;
  }
  getValue() {
    if (!this.isRange && this.selectedDate.value) {
      this.modelValue.value = this.selectedDate.value.format(this.format);
      return;
    }
    if (this.selectedDate.value || this.selectedEndDate.value) {
      this.modelValue.value = [this.selectedDate.value ? this.selectedDate.value.format(this.format) : null, this.selectedEndDate.value ? this.selectedEndDate.value.format(this.format) : null];
    }
  }
}
const AtticDatepicker_vue_vue_type_style_index_0_lang = "";
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isBetween);
const _sfc_main = {
  name: "AtticDatepicker",
  props: {
    modelValue: Object,
    endDate: String,
    format: {
      type: String,
      default: "DD MMM YYYY"
    },
    trigger: {
      type: String,
      default: null
    },
    showXMonths: Number,
    isRange: Boolean,
    keepOpen: Boolean
  },
  components: {
    Calendar,
    YearsCalendar,
    MonthsCalendar,
    DatesCalendar
  },
  directives: {
    attic: {
      mounted: (el, binding) => {
        useDirective(binding);
      },
      updated: (el, binding) => {
        useDirective(binding);
      }
    }
  },
  setup(props, { emit }) {
    const showCalendar = ref(false);
    const atticDatepicker = new Datepicker(props.modelValue, props.format, props.isRange || props.isRange === "true", typeof props.keepOpen === "string" ? !(props.keepOpen === "false") : props.keepOpen);
    const calendarView = computed(() => {
      const date = ref(atticDatepicker.selectedDate.value ?? dayjs());
      const subtractMonth = () => {
        date.value = date.value.subtract(1, "month");
      };
      const addMonth = () => {
        date.value = date.value.add(1, "month");
      };
      watch(() => atticDatepicker.selectedDate.value, (value, prevValue) => {
        date.value = value;
      });
      return {
        subtractMonth,
        addMonth,
        date
      };
    });
    const clearDate = () => {
      atticDatepicker.selectedDate.value = null;
      showCalendar.value = false;
    };
    watch(() => atticDatepicker.modelValue.value, (value, prevValue) => {
      emit("update:modelValue", value);
    });
    provide("atticDatepicker", atticDatepicker);
    provide("showCalendar", showCalendar);
    provide("calendarView", calendarView);
    provide("showXMonths", props.showXMonths);
    return {
      clearDate,
      atticDatepicker,
      showCalendar,
      calendarView,
      dayjs
    };
  }
};
const _hoisted_1 = { class: "md:space-y-2" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 2,
  class: "text-gray-400"
};
const _hoisted_5 = {
  key: 0,
  class: "attic-datepicker-calendar place-left md:absolute fixed bg-white md:rounded-[28px] border py-5 px-6 md:shadow-xl z-[99] md:top-auto md:right-auto md:h-auto md:w-auto md:space-y-0 top-0 right-0 h-full w-full space-y-8"
};
const _hoisted_6 = { class: "md:flex md:items-start md:space-x-3 md:space-y-0 space-y-8" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Calendar = resolveComponent("Calendar");
  const _directive_attic = resolveDirective("attic");
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {
      value: $setup.atticDatepicker.modelValue.value,
      placeholder: _ctx.$attrs.placeholder,
      clear: $setup.clearDate
    }, () => [
      createElementVNode("div", mergeProps({ class: "relative block w-full pl-3 pr-12 py-3 rounded-lg overflow-hidden text-sm transition-colors bg-white border focus:ring focus:outline-none shadow" }, _ctx.$attrs), [
        !$props.isRange && $setup.atticDatepicker.selectedDate.value ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($setup.atticDatepicker.modelValue.value), 1)) : $props.isRange && $setup.atticDatepicker.modelValue.value && $setup.atticDatepicker.modelValue.value.length > 1 ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString($setup.atticDatepicker.modelValue.value[0]) + " ~ " + toDisplayString($setup.atticDatepicker.modelValue.value[1]), 1)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(_ctx.$attrs.placeholder ?? "Select Date"), 1))
      ], 16)
    ]),
    createVNode(Transition, {
      "enter-from-class": "opacity-0 translate-y-3",
      "enter-to-class": "opacity-100 translate-y-0",
      "enter-active-class": "transform transition ease-out duration-200",
      "leave-active-class": "transform transition ease-in duration-150",
      "leave-from-class": "opacity-100 translate-y-0",
      "leave-to-class": "opacity-0 translate-y-3"
    }, {
      default: withCtx(() => [
        $setup.showCalendar ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createElementVNode("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(parseInt($props.showXMonths ?? 1), (x) => {
              return openBlock(), createBlock(_component_Calendar, {
                date: $setup.calendarView.date.value.add(x - 1, "month")
              }, null, 8, ["date"]);
            }), 256))
          ]),
          createElementVNode("button", {
            class: "sm:hidden w-full bg-red-500 rounded text-white font-bold p-3",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.showCalendar = false)
          }, " Close ")
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ])), [
    [_directive_attic, $props.trigger, "away"]
  ]);
}
const AtticDatepicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const style = "";
const api = {
  install: (app) => {
    app.component("AtticDatepicker", AtticDatepicker);
  }
};
const main = Object.assign(AtticDatepicker, api, {
  Calendar
});
export {
  main as default
};
