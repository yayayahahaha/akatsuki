module.exports = {
	head: {
		title: 'Hello'
	},
	build: {
		vendor: []
	},
	plugins: [
	    {src:'~plugins/jquery.min.js', ssr:false},
	    { src: '~assets/js/akatsuki.js', ssr: false }
	]
};