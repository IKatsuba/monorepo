import { render } from '@testing-library/react';

import Library4Component18 from './library-4-component-18';

describe('Library4Component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component18 />);
    expect(baseElement).toBeTruthy();
  });
});
