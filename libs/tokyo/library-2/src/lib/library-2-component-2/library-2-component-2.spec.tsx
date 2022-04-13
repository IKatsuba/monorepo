import { render } from '@testing-library/react';

import Library2Component2 from './library-2-component-2';

describe('Library2Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
