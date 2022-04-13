import { render } from '@testing-library/react';

import Library0Component1 from './library-0-component-1';

describe('Library0Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
