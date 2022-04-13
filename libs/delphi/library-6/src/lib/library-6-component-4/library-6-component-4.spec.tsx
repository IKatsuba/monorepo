import { render } from '@testing-library/react';

import Library6Component4 from './library-6-component-4';

describe('Library6Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
