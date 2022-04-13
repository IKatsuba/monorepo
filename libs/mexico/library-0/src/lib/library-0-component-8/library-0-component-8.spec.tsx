import { render } from '@testing-library/react';

import Library0Component8 from './library-0-component-8';

describe('Library0Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component8 />);
    expect(baseElement).toBeTruthy();
  });
});
