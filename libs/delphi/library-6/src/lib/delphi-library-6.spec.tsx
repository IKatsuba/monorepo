import { render } from '@testing-library/react';

import DelphiLibrary6 from './delphi-library-6';

describe('DelphiLibrary6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelphiLibrary6 />);
    expect(baseElement).toBeTruthy();
  });
});
