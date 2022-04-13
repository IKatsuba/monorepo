import { render } from '@testing-library/react';

import Library4Component17 from './library-4-component-17';

describe('Library4Component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component17 />);
    expect(baseElement).toBeTruthy();
  });
});
