const path = require('path');

module.exports = {
  	entry: './src/index.js',
  	output: {
    	filename: 'bundle.js',
    	path: path.resolve(__dirname, 'dist')
  	},
  	devtool: 'inline-source-map',
  	devServer: {
		contentBase: './dist'
	},
  	module: {
	  	rules: [
	  		{
				test: /\.js$/,
		      	exclude: /(node_modules)/,
		      	use: {
		        	loader: 'babel-loader',
			        options: {
			          	presets: ['es2015', 'env', 'react', 'stage-2']
			        }
		      	}
	    	},
	    	{
	    		test: /\.css$/,
	    		use: [
	    			'style-loader',
	    			'css-loader'
	    		]
	    	}
	    ]
	}
};
