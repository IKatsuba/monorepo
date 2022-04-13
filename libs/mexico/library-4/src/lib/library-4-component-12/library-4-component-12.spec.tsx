import { render } from '@testing-library/react';

import Library4Component12 from './library-4-component-12';

describe('Library4Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
