import { render } from '@testing-library/react';

import Library0Component4 from './library-0-component-4';

describe('Library0Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
