import { render } from '@testing-library/react';

import Library5Component9 from './library-5-component-9';

describe('Library5Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component9 />);
    expect(baseElement).toBeTruthy();
  });
});
