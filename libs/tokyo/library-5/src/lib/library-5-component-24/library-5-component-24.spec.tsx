import { render } from '@testing-library/react';

import Library5Component24 from './library-5-component-24';

describe('Library5Component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component24 />);
    expect(baseElement).toBeTruthy();
  });
});
