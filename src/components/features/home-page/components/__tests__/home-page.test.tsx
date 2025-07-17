import React from 'react';
import { render, screen } from '@testing-library/react';
import { Homepage } from '../home-page';

describe('Homepage', () => {
    it('renders the main heading', () => {
        render(<Homepage Socials={() => <div />} Photos={() => <div />} Stats={() => <div />} />);
        expect(screen.getByRole('heading', { name: /hello! i'm/i })).toBeInTheDocument();
    });
}); 