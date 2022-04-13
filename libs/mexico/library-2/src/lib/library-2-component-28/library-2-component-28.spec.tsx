import { render } from '@testing-library/react';

import Library2Component28 from './library-2-component-28';

describe('Library2Component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component28 />);
    expect(baseElement).toBeTruthy();
  });
});
