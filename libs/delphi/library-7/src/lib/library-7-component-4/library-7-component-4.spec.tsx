import { render } from '@testing-library/react';

import Library7Component4 from './library-7-component-4';

describe('Library7Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
