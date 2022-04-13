import { render } from '@testing-library/react';

import Library0Component6 from './library-0-component-6';

describe('Library0Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component6 />);
    expect(baseElement).toBeTruthy();
  });
});
