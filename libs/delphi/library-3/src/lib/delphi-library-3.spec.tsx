import { render } from '@testing-library/react';

import DelphiLibrary3 from './delphi-library-3';

describe('DelphiLibrary3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelphiLibrary3 />);
    expect(baseElement).toBeTruthy();
  });
});
