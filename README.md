# Canvas API in Obsidian

**Obsidian Canvas** is a *[different thing](https://obsidian.md/canvas)*.  This plug-in lets you use render a `<canvas>` html element from within your markdown, using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

# Usage

Tag your code block with `canvas-api`, and the `<canvas>` element will be available inside the code block, as `cnv`.

Try the following example:

````
```canvas-api
cnv.width  = cnv.parentNode.scrollWidth
cnv.height = cnv.width * 9 / 16

const ctx = cnv.getContext (`2d`)
const y   = (cnv.height / 2) - 50

let x = -100

function draw_frame () {
	ctx.fillStyle = `turquoise`
	ctx.fillRect (0, 0, cnv.width, cnv.height)

	ctx.fillStyle = `deeppink`
	ctx.fillRect (x, y, 100, 100);
	
	x += 1
	if (x > cnv.width) {
		x = -100
	}
	
	requestAnimationFrame (draw_frame)
}

requestAnimationFrame (draw_frame)
```
````