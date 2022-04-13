import { render } from '@testing-library/react';

import Library6Component7 from './library-6-component-7';

describe('Library6Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
