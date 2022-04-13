import { render } from '@testing-library/react';

import Library5Component3 from './library-5-component-3';

describe('Library5Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component3 />);
    expect(baseElement).toBeTruthy();
  });
});
