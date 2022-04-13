import { render } from '@testing-library/react';

import DelphiLibrary0 from './delphi-library-0';

describe('DelphiLibrary0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelphiLibrary0 />);
    expect(baseElement).toBeTruthy();
  });
});
