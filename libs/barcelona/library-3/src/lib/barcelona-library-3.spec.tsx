import { render } from '@testing-library/react';

import BarcelonaLibrary3 from './barcelona-library-3';

describe('BarcelonaLibrary3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcelonaLibrary3 />);
    expect(baseElement).toBeTruthy();
  });
});
