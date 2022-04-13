import { render } from '@testing-library/react';

import Library0Component16 from './library-0-component-16';

describe('Library0Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
