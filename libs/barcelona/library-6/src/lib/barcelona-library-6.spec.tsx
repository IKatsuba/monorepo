import { render } from '@testing-library/react';

import BarcelonaLibrary6 from './barcelona-library-6';

describe('BarcelonaLibrary6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcelonaLibrary6 />);
    expect(baseElement).toBeTruthy();
  });
});
