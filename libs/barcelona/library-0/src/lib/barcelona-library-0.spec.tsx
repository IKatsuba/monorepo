import { render } from '@testing-library/react';

import BarcelonaLibrary0 from './barcelona-library-0';

describe('BarcelonaLibrary0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcelonaLibrary0 />);
    expect(baseElement).toBeTruthy();
  });
});
