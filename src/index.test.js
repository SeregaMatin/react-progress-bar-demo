import React from 'react';
import { render } from '@testing-library/react';

test('Application starts properly', () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    // Execute index.js code.
    require('index.js');

    expect(rootElement).toBeInTheDocument();

    const appElement = rootElement.getElementsByClassName('App')[0];
    expect(appElement).toBeInTheDocument();
});
