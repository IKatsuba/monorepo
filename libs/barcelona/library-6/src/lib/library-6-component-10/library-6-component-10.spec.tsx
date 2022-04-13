import { render } from '@testing-library/react';

import Library6Component10 from './library-6-component-10';

describe('Library6Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component10 />);
    expect(baseElement).toBeTruthy();
  });
});
