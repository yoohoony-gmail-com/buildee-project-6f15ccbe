import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

import App from './App';

describe('App', function() {
  it('renders the main application and displays the site name', function() {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // The site name "Site" from the spec should be rendered.
    expect(screen.getByText(/Site/i)).toBeInTheDocument();
  });

  it('renders the main page with a gallery section', function() {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // The spec is "사진과 작품을 전시할 수 있는 갤러리 사이트"
    // which means "Gallery site for photos and artworks".
    // We expect a heading for the gallery.
    const galleryHeading = screen.queryByRole('heading', { name: /갤러리|Gallery/i });
    expect(galleryHeading).toBeInTheDocument();
  });
});
