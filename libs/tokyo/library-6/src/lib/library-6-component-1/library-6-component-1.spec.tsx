import { render } from '@testing-library/react';

import Library6Component1 from './library-6-component-1';

describe('Library6Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
