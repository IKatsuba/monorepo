import { render } from '@testing-library/react';

import Library7Component1 from './library-7-component-1';

describe('Library7Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
