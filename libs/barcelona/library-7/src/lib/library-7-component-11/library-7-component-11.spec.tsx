import { render } from '@testing-library/react';

import Library7Component11 from './library-7-component-11';

describe('Library7Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
