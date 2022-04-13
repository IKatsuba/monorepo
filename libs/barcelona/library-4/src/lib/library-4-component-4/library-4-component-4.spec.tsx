import { render } from '@testing-library/react';

import Library4Component4 from './library-4-component-4';

describe('Library4Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
