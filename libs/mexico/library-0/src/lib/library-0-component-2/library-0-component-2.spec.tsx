import { render } from '@testing-library/react';

import Library0Component2 from './library-0-component-2';

describe('Library0Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
