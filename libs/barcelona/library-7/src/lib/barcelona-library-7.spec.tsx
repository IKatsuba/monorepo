import { render } from '@testing-library/react';

import BarcelonaLibrary7 from './barcelona-library-7';

describe('BarcelonaLibrary7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcelonaLibrary7 />);
    expect(baseElement).toBeTruthy();
  });
});
