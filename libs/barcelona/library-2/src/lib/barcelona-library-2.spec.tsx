import { render } from '@testing-library/react';

import BarcelonaLibrary2 from './barcelona-library-2';

describe('BarcelonaLibrary2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcelonaLibrary2 />);
    expect(baseElement).toBeTruthy();
  });
});
