import Ract from "react";

export type PropsIconType = {
  width?: number;
  height?: number;
  fill?: string;
};

export const LocationIcon = ({
  width = 15,
  height = 20,
  fill = "#FFFFFF",
}: PropsIconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 5.625C6.46437 5.625 5.625 6.46437 5.625 7.5C5.625 8.53562 6.46437 9.375 7.5 9.375C8.53562 9.375 9.375 8.53562 9.375 7.5C9.375 6.46437 8.53562 5.625 7.5 5.625ZM7.5 10.625C5.77437 10.625 4.375 9.22625 4.375 7.5C4.375 5.77375 5.77437 4.375 7.5 4.375C9.22562 4.375 10.625 5.77375 10.625 7.5C10.625 9.22625 9.22562 10.625 7.5 10.625ZM7.5 0C3.35812 0 0 3.35812 0 7.5C0 10.6362 6.25312 20.0069 7.5 20C8.7275 20.0069 15 10.5937 15 7.5C15 3.35812 11.6419 0 7.5 0Z"
        fill={fill}
      />
    </svg>
  );
};
