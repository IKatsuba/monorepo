import { render } from '@testing-library/react';

import Library0Component7 from './library-0-component-7';

describe('Library0Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
