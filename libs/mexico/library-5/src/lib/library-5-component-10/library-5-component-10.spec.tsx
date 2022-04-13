import { render } from '@testing-library/react';

import Library5Component10 from './library-5-component-10';

describe('Library5Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component10 />);
    expect(baseElement).toBeTruthy();
  });
});
