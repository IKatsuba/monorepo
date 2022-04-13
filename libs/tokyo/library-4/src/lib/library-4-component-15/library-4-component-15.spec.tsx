import { render } from '@testing-library/react';

import Library4Component15 from './library-4-component-15';

describe('Library4Component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component15 />);
    expect(baseElement).toBeTruthy();
  });
});
