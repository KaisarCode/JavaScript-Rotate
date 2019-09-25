# Overview
KaisarCode Rotate is a stand-alone (not framework-dependant) library that allows the real rotation of any block or inline-block element in a Crossbrowser way.
It was tested on major desktop, mobile, game console, and TV browsers... but should work in other devices too, if that exists.
Here, we present different flavours:
* A simple one, in which we can rotate an element to a fixed angle
* A dynamic one, that we can grab with the cursor or touch, and slide its rotation as if it was a Dial wheel.

# Implementation
Add the library to your HTML document and execute
it just by passing the DOM element, and the rotation degrees as parameter.

```javascript
//KaisarCode Rotate
var elem = document.getElementById("my-elem");
kcRotate(elem, 63);

//KaisarCode Rotate Dial
var elem = document.getElementById("my-elem");
kcRotateDial(elem);
```
And Voilá.

> Today (2015 - 2016), one can still use the simple rotate function, but it is way better to do it directly applying CSS styles.
> So, I really think in that function as educative-purpose only.
> Doesn't happens the same with RotateDial, we still need JavaScript to achieve that drag-based functionality.

## KC Dial goodies
Aside from allow the element to be rotated by hand, KC Dial has several properties to make it more useful.
Once we've initialized the rotational proces, we can retrieve data from it.
Here is an example:

```javascript
var elem = document.getElementById("my-elem");
var rotated = kcRotateDial(elem);

rotated.onchange=function(){//->fires every time we move the element

	var deg = rotated.deg; //->returns angle in degrees
	var rad = rotated.rad; //->returns angle in radians
	var per = rotated.per; //->returns angle in percentage
	var fullRad = rotated.fullRad; //->returns absolute angle in radians (unlimited spins)
	var fullDeg = rotated.fullDeg; //->returns absolute angle in degrees (unlimited spins)
	var fullPer = rotated.fullPer; //->returns absolute angle in percentage (unlimited spins)
	var spins = rotated.spin; //-> Amount of spins
	var clockwise = rotated.clock; //-> Am I going clockwise?
	
	console.log(deg);
}
```


# Tested on
IE7 and higher, Firefox, Chrome, Safari, Opera, on Desktop, Mobile, Game Consoles, Smart TVs, and even on a potato...

# Notes
#### Just for Dial, and positioning
Be careful to not reposition the rotated element directly, always put it into a container, and move the container. Because if not, IE will keep thinking that the element's center point is on its natural place, and trust me, we don't want that.

#### Width and Height
Make sure that the element to be rotated has the same width and height, because IExplorer will rotate the rendered element inside a fixed box with that dimensions. If you rotate a rectangle, the element will get cut off (like masked). If you really need to use a rectangular-sized element, please read the section below.

#### Fixing rectangular elements' issues
	
Use a container large enough to wrap the element across all its rotational area.
This would be sort of a canvas, with the visual parts in the exact middle of it.
And apply the rotation to the container.
In this case, You'll have to add the attribute ```unselectable="on"``` to the inner elements.

#### IE 8/9:
This script was tested on the real Browsers, and it works awesome. But, if you try to run it on compatibility mode (like, selecting IE version through the console) will not. And it's not because a bug in the code... the CSS rotations (at least), doesn't works on this case (For any library or implementation). No Problem, on the real IE8, IE9, IE10... Will work as intended, It's just a compatibility mode issue, proper from the IExplorer CSS engine, and hasn't solution yet (At least not that I know, If you find one... please tell us all).

# Examples
#### Code Example 1
```html
<style>
#elem {
	width:350px;
	height:225px;
	background-color:orange;
	text-align:center;
	padding-top:125px;
}
</style>
<div id="elem">
	<img src="rect.png" alt="" width="300" height="100" unselectable="on" />
</div>
<script>
	var elem = document.getElementById("elem");
	kcRotate(elem, 63);
</script>
```
	
#### Code Example 2
Hey, with a table-styled element it's better
```html
<style>
	#elem{
		display:table;
		border:none;
		background-color:orange;
		width:300px;
		height:300px;
	}
	#elem .elem-cell{
		display:table-cell;
		vertical-align:middle;
		text-align:center;
	}
</style>
<div id="elem">
	<div class="elem-cell" unselectable="on">
		<span class="visual-elem" unselectable="on">They see me Rollin'...</span>
	</div>
</div>
<script>
	var elem = document.getElementById("elem");
	kcRotate(elem, 63);
</script>
```
If you use text as content, it is better to give to the container a background color. This way you'll prevent messed border transparencies (Proper from IExplorer).

##### Kc Rotate Dial on JSFiddle

https://jsfiddle.net/gysqqopd/7/
