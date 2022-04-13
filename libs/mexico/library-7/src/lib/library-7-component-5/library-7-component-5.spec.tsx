import { render } from '@testing-library/react';

import Library7Component5 from './library-7-component-5';

describe('Library7Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component5 />);
    expect(baseElement).toBeTruthy();
  });
});
