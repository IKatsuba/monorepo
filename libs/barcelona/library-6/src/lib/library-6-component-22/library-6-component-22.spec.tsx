import { render } from '@testing-library/react';

import Library6Component22 from './library-6-component-22';

describe('Library6Component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component22 />);
    expect(baseElement).toBeTruthy();
  });
});
