import { render } from '@testing-library/react';

import Library4Component5 from './library-4-component-5';

describe('Library4Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component5 />);
    expect(baseElement).toBeTruthy();
  });
});
