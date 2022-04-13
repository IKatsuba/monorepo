import { render } from '@testing-library/react';

import Library6Component15 from './library-6-component-15';

describe('Library6Component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component15 />);
    expect(baseElement).toBeTruthy();
  });
});
