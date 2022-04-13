import { render } from '@testing-library/react';

import Library5Component17 from './library-5-component-17';

describe('Library5Component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component17 />);
    expect(baseElement).toBeTruthy();
  });
});
