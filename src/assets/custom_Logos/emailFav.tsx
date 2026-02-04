import type { LinkProp } from "../../types/propTypes";

const emailFav = ({ link }: LinkProp) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit LinkedIn profile (opens in new tab)"
      href={link}
      className="hover:pb-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        className="w-7 h-7"
      >
        <path
          d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
          stroke="var(--foreground)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="var(--foreground)"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </a>
  );
};

export default emailFav;
