import { render } from '@testing-library/react';

import Library6Component23 from './library-6-component-23';

describe('Library6Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component23 />);
    expect(baseElement).toBeTruthy();
  });
});
