module.exports = {
	head: {
		title: 'Hello'
	},
	build: {
		vendor: []
	},
	plugins: [
	    { src: '~assets/js/akatsuki.js', ssr: false }
	]
};