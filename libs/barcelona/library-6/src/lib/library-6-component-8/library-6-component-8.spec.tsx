import { render } from '@testing-library/react';

import Library6Component8 from './library-6-component-8';

describe('Library6Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component8 />);
    expect(baseElement).toBeTruthy();
  });
});
