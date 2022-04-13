import { render } from '@testing-library/react';

import Library4Component8 from './library-4-component-8';

describe('Library4Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component8 />);
    expect(baseElement).toBeTruthy();
  });
});
