import { render } from '@testing-library/react';

import Library6Component20 from './library-6-component-20';

describe('Library6Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
