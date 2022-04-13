import { render } from '@testing-library/react';

import Library0Component5 from './library-0-component-5';

describe('Library0Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component5 />);
    expect(baseElement).toBeTruthy();
  });
});
