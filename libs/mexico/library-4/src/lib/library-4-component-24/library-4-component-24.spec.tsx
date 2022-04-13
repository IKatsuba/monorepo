import { render } from '@testing-library/react';

import Library4Component24 from './library-4-component-24';

describe('Library4Component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component24 />);
    expect(baseElement).toBeTruthy();
  });
});
