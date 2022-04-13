import { render } from '@testing-library/react';

import Library6Component0 from './library-6-component-0';

describe('Library6Component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component0 />);
    expect(baseElement).toBeTruthy();
  });
});
