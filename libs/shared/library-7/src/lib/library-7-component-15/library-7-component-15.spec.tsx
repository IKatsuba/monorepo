import { render } from '@testing-library/react';

import Library7Component15 from './library-7-component-15';

describe('Library7Component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component15 />);
    expect(baseElement).toBeTruthy();
  });
});
