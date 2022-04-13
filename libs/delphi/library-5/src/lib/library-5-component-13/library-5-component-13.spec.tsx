import { render } from '@testing-library/react';

import Library5Component13 from './library-5-component-13';

describe('Library5Component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component13 />);
    expect(baseElement).toBeTruthy();
  });
});
