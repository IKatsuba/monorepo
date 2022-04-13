import { render } from '@testing-library/react';

import Library6Component11 from './library-6-component-11';

describe('Library6Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
