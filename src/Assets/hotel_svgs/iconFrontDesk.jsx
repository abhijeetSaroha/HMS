import React from "react";

export default function IconFrontDesk({ active }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-3"
    >
      <path
        d="M14.862 3.487L16.549 1.799C16.9007 1.44733 17.3777 1.24976 17.875 1.24976C18.3723 1.24976 18.8493 1.44733 19.201 1.799C19.5527 2.15068 19.7502 2.62766 19.7502 3.125C19.7502 3.62235 19.5527 4.09933 19.201 4.451L8.582 15.07C8.05332 15.5984 7.40137 15.9867 6.685 16.2L4 17L4.8 14.315C5.01328 13.5986 5.40163 12.9467 5.93 12.418L14.862 3.487ZM14.862 3.487L17.5 6.125M16 13V17.75C16 18.3467 15.7629 18.919 15.341 19.341C14.919 19.763 14.3467 20 13.75 20H3.25C2.65326 20 2.08097 19.763 1.65901 19.341C1.23705 18.919 1 18.3467 1 17.75V7.25C1 6.65327 1.23705 6.08097 1.65901 5.65901C2.08097 5.23706 2.65326 5 3.25 5H8"
        stroke={active ? "#1366D9" : "#5D6679"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
