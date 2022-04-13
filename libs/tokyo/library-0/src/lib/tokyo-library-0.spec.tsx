import { render } from '@testing-library/react';

import TokyoLibrary0 from './tokyo-library-0';

describe('TokyoLibrary0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokyoLibrary0 />);
    expect(baseElement).toBeTruthy();
  });
});
