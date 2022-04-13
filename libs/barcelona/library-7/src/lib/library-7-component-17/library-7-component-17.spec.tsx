import { render } from '@testing-library/react';

import Library7Component17 from './library-7-component-17';

describe('Library7Component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component17 />);
    expect(baseElement).toBeTruthy();
  });
});
