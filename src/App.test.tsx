import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';

test('renders app', async () => {
	const { getByText } = render(<App />);

	expect(getByText('Welcome to react app')).toBeInTheDocument();
});
