import { render } from '@testing-library/react';

import Library6Component17 from './library-6-component-17';

describe('Library6Component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component17 />);
    expect(baseElement).toBeTruthy();
  });
});
