import { Plugin } from "obsidian"

export default class ExamplePlugin extends Plugin {
  async onload () {
    this.registerMarkdownCodeBlockProcessor ("canvas-api", (src, el) => {
		const div = el.createEl (`div`)
		const cnv = div.createEl (`canvas`)
		const AsyncFunction = async function () {}.constructor
		const run = AsyncFunction (`cnv`, src)
		setTimeout (run, 200, cnv)
	})
  }
}