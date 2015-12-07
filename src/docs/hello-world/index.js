import snippet from './snippet.html'
import template from './hello-world.html'
import meta from './hello-world.json'
import './hello-world.scss'
import {sizes} from 'utils'
import helloWorld from 'src/components/hello-world'
import demo from 'vuestrap-docs/src/components/demo'

export default {
	route: {
		url: '/hello-world',
		name: meta.name,
		title: meta.title,
	},
	template: template,
	data() {
		return {
			meta: meta,
		  snippet: snippet,
		  controls: {
		    bold: false,
		    size: 'md',
		    sizes: sizes,
		  }
		}
	},
	components: {
		'hello-world': helloWorld,
		'docs-demo': demo,
	},
}
