import { render } from '@testing-library/react';

import Library7Component8 from './library-7-component-8';

describe('Library7Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component8 />);
    expect(baseElement).toBeTruthy();
  });
});
