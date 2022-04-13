import { render } from '@testing-library/react';

import Library6Component5 from './library-6-component-5';

describe('Library6Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component5 />);
    expect(baseElement).toBeTruthy();
  });
});
