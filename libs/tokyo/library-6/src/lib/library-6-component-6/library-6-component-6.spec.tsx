import { render } from '@testing-library/react';

import Library6Component6 from './library-6-component-6';

describe('Library6Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component6 />);
    expect(baseElement).toBeTruthy();
  });
});
