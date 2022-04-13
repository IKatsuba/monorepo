import { render } from '@testing-library/react';

import Library7Component26 from './library-7-component-26';

describe('Library7Component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component26 />);
    expect(baseElement).toBeTruthy();
  });
});
