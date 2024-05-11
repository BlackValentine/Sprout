import React from 'react';

interface ISelectProps {
  required?: boolean;
  title?: string;
}

export default function Select({ required, title }: ISelectProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span>
        {title} {required && <>*</>}
      </span>
      <input type="text" className="w-full p-3 border border-solid border-white rounded bg-secondary outline-none" />
    </div>
  );
}
