import { render } from '@testing-library/react';

import TokyoLibrary3 from './tokyo-library-3';

describe('TokyoLibrary3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokyoLibrary3 />);
    expect(baseElement).toBeTruthy();
  });
});
