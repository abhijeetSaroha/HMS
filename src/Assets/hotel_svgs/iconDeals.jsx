import React from "react";

export default function IconDeals({ active }) {
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
        d="M7.568 1H3.25C2.65326 1 2.08097 1.23705 1.65901 1.65901C1.23705 2.08097 1 2.65326 1 3.25V7.568C1 8.165 1.237 8.738 1.659 9.159L11.24 18.74C11.939 19.439 13.02 19.612 13.847 19.07C15.9286 17.7066 17.7066 15.9286 19.07 13.847C19.612 13.02 19.439 11.939 18.74 11.24L9.16 1.66C8.95103 1.45077 8.70286 1.28478 8.4297 1.17154C8.15653 1.05829 7.86371 0.999997 7.568 1Z"
        stroke={active ? "#1366D9" : "#5D6679"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
