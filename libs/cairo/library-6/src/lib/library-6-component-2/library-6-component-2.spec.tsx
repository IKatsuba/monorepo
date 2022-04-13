import { render } from '@testing-library/react';

import Library6Component2 from './library-6-component-2';

describe('Library6Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
