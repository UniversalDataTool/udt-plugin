#!/usr/bin/env node

const yargs = require("yargs")
const { hideBin } = require("yargs/helpers")
const Bunder = require("parcel-bundler")
const app = require("express")()
const path = require("path")
const fs = require("fs")

async function main() {
	const args = yargs(hideBin(process.argv))

	const cwd = path.resolve(".")

	const packageJSONPath = path.join(cwd, "package.json")
	const pluginConfigPath = path.join(cwd, "plugin-config.js")

	if (!fs.existsSync(packageJSONPath)) {
		console.error(`No "package.json" found in current working directory`)
		process.exit(1)
	}

	if (!fs.existsSync(pluginConfigPath)) {
		console.log(`No "plugin-config.js" found in current working directory`)
		process.exit(1)
	}

	const bundler = new Bundler(pluginConfigPath, {})
}

main()
