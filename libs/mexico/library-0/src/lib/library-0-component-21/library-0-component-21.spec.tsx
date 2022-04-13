import { render } from '@testing-library/react';

import Library0Component21 from './library-0-component-21';

describe('Library0Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
