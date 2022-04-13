import { render } from '@testing-library/react';

import BarcelonaLibrary4 from './barcelona-library-4';

describe('BarcelonaLibrary4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcelonaLibrary4 />);
    expect(baseElement).toBeTruthy();
  });
});
