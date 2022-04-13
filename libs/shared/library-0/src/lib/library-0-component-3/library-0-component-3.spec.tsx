import { render } from '@testing-library/react';

import Library0Component3 from './library-0-component-3';

describe('Library0Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component3 />);
    expect(baseElement).toBeTruthy();
  });
});
