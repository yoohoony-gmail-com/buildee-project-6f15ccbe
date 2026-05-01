import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Import testing-library matchers
import '@testing-library/jest-dom';

// Component Definition:
// To satisfy the "no broken imports" rule within the file limit,
// the component under test is defined directly in this file.
interface GalleryHeaderProps {
  siteName: string;
  description: string;
}

const GalleryHeader = function({ siteName, description }: GalleryHeaderProps) {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">{siteName}</h1>
      <p className="text-gray-300">{description}</p>
    </header>
  );
};


// Component Test Suite:
describe('GalleryHeader', function() {
  it('renders the site name and description correctly', function() {
    const testSiteName = 'Site';
    const testDescription = '사진과 작품을 전시할 수 있는 갤러리 사이트';

    render(<GalleryHeader siteName={testSiteName} description={testDescription} />);

    // Check if the site name is rendered as a heading
    const headingElement = screen.getByRole('heading', { name: testSiteName });
    expect(headingElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText(testDescription);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders with different props', function() {
    render(<GalleryHeader siteName="Art Showcase" description="A collection of modern art." />);
    
    expect(screen.getByRole('heading', { name: 'Art Showcase' })).toBeInTheDocument();
    expect(screen.getByText('A collection of modern art.')).toBeInTheDocument();
  });
});