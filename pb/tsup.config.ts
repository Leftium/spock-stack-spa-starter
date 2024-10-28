import { defineConfig } from 'tsup'

export default defineConfig({
	format: ['cjs'],
	shims: true,
	skipNodeModulesBundle: true,
	clean: false,
	target: 'node20',
	platform: 'node',
	minify: false,
	sourcemap: 'inline',
	bundle: true,
	noExternal: [],
	splitting: false,
})
