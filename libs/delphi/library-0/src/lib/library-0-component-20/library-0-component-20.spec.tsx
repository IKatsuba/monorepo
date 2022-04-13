import { render } from '@testing-library/react';

import Library0Component20 from './library-0-component-20';

describe('Library0Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
