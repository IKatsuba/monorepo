import { render } from '@testing-library/react';

import Library6Component16 from './library-6-component-16';

describe('Library6Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
