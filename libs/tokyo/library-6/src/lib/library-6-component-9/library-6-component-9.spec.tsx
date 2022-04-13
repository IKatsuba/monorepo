import { render } from '@testing-library/react';

import Library6Component9 from './library-6-component-9';

describe('Library6Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component9 />);
    expect(baseElement).toBeTruthy();
  });
});
