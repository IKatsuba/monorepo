import { render } from '@testing-library/react';

import BarcelonaLibrary5 from './barcelona-library-5';

describe('BarcelonaLibrary5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarcelonaLibrary5 />);
    expect(baseElement).toBeTruthy();
  });
});
