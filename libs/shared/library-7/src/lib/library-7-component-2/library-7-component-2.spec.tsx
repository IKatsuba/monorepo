import { render } from '@testing-library/react';

import Library7Component2 from './library-7-component-2';

describe('Library7Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
