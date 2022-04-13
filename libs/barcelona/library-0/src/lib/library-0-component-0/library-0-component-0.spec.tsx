import { render } from '@testing-library/react';

import Library0Component0 from './library-0-component-0';

describe('Library0Component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component0 />);
    expect(baseElement).toBeTruthy();
  });
});
