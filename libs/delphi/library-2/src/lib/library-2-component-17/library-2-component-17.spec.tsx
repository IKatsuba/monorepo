import { render } from '@testing-library/react';

import Library2Component17 from './library-2-component-17';

describe('Library2Component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component17 />);
    expect(baseElement).toBeTruthy();
  });
});
