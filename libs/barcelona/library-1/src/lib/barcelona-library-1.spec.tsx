import { render } from '@testing-library/react';

import BarcelonaLibrary1 from './barcelona-library-1';

describe('BarcelonaLibrary1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcelonaLibrary1 />);
    expect(baseElement).toBeTruthy();
  });
});
