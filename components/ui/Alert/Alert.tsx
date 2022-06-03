import { ReactNode } from 'react';

import { Severity } from '@enums/alert.enum';

interface AlertProps {
  type: Severity;
  children: ReactNode;
}

const Alert = ({ type, children }: AlertProps) => {
  const theme =
    type === Severity.SUCCESS
      ? 'text-green-700 bg-green-100'
      : 'text-red-700 bg-red-100';

  return (
    <div
      className={`p-4 mb-4 text-sm ${theme} rounded-lg flex justify-center`}
      role="alert"
    >
      <span className="font-medium">{children}</span>
    </div>
  );
};

export default Alert;
