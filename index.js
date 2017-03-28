const StateRouter = require('abstract-state-router')
const makeSvelteStateRenderer = require('svelte-state-renderer')


const renderer = makeSvelteStateRenderer()
const stateRouter = StateRouter(renderer, document.querySelector('#target'))

stateRouter.addState({
	name: 'main',
	template: require('./Wat.html'),
	resolve: () => {
		return Promise.resolve({
				menu: [{
				label: 'first',
				children: [{
					label: 'second'
				}]
			}]
		})
	}
})

// add whatever states to the state router

stateRouter.evaluateCurrentRoute('main')
