import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import './index.scss';

export default function Loading() {
  const { promiseInProgress } = usePromiseTracker({ delay: 500 });

  const _onContextMenu = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      {promiseInProgress && (
        <div className="fixed inset-0 w-screen h-screen bg-blur z-[10000]" onContextMenu={_onContextMenu}>
          <div className="loader">
            <div className="face face1">
              <div className="circle"></div>
            </div>
            <div className="face face2">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
