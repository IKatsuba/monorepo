import { render } from '@testing-library/react';

import Library6Component14 from './library-6-component-14';

describe('Library6Component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component14 />);
    expect(baseElement).toBeTruthy();
  });
});
