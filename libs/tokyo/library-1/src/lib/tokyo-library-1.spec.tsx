import { render } from '@testing-library/react';

import TokyoLibrary1 from './tokyo-library-1';

describe('TokyoLibrary1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokyoLibrary1 />);
    expect(baseElement).toBeTruthy();
  });
});
