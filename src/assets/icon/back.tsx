import { IconProps } from "types/components/Icon";

const BackIcon: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 20, y: 20 },
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={iSize.x}
      y={iSize.y}
      height={iSize.x}
      width={iSize.y}
      viewBox="0 0 384.97 384.97"
    >
      <path
        d="M192.485,0C86.185,0,0,86.185,0,192.485C0,298.797,86.185,384.97,192.485,384.97    c106.312,0,192.485-86.173,192.485-192.485C384.97,86.185,298.797,0,192.485,0z M192.485,360.909    c-93.018,0-168.424-75.406-168.424-168.424S99.467,24.061,192.485,24.061s168.424,75.406,168.424,168.424    S285.503,360.909,192.485,360.909z"
        fill={iColor}
      />
      <path
        d="M300.758,180.226H113.169l62.558-63.46c4.692-4.74,4.692-12.439,0-17.179c-4.704-4.74-12.319-4.74-17.011,0l-82.997,84.2    c-2.25,2.25-3.537,5.414-3.537,8.59c0,3.164,1.299,6.328,3.525,8.59l82.997,84.2c4.704,4.752,12.319,4.74,17.011,0    c4.704-4.752,4.704-12.439,0-17.191l-62.558-63.46h187.601c6.641,0,12.03-5.438,12.03-12.151    C312.788,185.664,307.398,180.226,300.758,180.226z"
        fill={iColor}
      />
    </svg>
  );
};

export default BackIcon;