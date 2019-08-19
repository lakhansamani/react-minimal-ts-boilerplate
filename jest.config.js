module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'\\.(ts|tsx)?$': 'babel-jest',
	},
	testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'], // looks for your test
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/public/'],
	setupFilesAfterEnv: [
		'jest-dom/extend-expect',
		'@testing-library/react/cleanup-after-each',
	],
};
