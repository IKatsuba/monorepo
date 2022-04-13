import { render } from '@testing-library/react';

import Library6Component21 from './library-6-component-21';

describe('Library6Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
