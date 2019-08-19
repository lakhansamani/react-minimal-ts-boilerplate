const presets = [
	'@babel/preset-react',
	'@babel/preset-typescript',
	[
		'@babel/env',
		{
			targets: {
				edge: '17',
				firefox: '60',
				chrome: '67',
				safari: '11.1',
			},
			corejs: 2,
		},
	],
];

const plugins = [
	'@babel/plugin-transform-spread',
	'@babel/plugin-proposal-object-rest-spread',
	'@babel/plugin-syntax-dynamic-import',
	'@babel/proposal-class-properties',
];

module.exports = { presets, plugins };
