import { render } from '@testing-library/react';

import Library6Component24 from './library-6-component-24';

describe('Library6Component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component24 />);
    expect(baseElement).toBeTruthy();
  });
});
