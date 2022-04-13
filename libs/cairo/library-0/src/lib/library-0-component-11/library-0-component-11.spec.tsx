import { render } from '@testing-library/react';

import Library0Component11 from './library-0-component-11';

describe('Library0Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
