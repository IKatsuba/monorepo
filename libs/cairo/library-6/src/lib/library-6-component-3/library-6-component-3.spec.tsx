import { render } from '@testing-library/react';

import Library6Component3 from './library-6-component-3';

describe('Library6Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component3 />);
    expect(baseElement).toBeTruthy();
  });
});
