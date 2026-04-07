export const languages = [
  {
    code: "en",
    label: "EN",
    name: "English",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        className="w-5 h-5 overflow-hidden flex-shrink-0"
      >
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath="url(#t)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    ),
  },
  {
    code: "km",
    label: "KH",
    name: "ខ្មែរ",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        className="w-5 h-5 overflow-hidden flex-shrink-0"
      >
        <rect width="60" height="10" fill="#032EA1" />
        <rect y="10" width="60" height="10" fill="#E00025" />
        <rect y="20" width="60" height="10" fill="#032EA1" />
        <rect x="22" y="12" width="16" height="6" fill="#fff" rx="1" />
      </svg>
    ),
  },
  {
    code: "zh",
    label: "CN",
    name: "中文",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        className="w-5 h-5 overflow-hidden flex-shrink-0"
      >
        <rect width="60" height="30" fill="#DE2910" />
        <g fill="#FFDE00" transform="translate(7,5)">
          <polygon points="0,-4 1.2,-1.2 4,-1.5 2,0.5 2.5,3.5 0,2 -2.5,3.5 -2,0.5 -4,-1.5 -1.2,-1.2" />
        </g>
        <g fill="#FFDE00" transform="translate(15,2) scale(0.5)">
          <polygon points="0,-4 1.2,-1.2 4,-1.5 2,0.5 2.5,3.5 0,2 -2.5,3.5 -2,0.5 -4,-1.5 -1.2,-1.2" />
        </g>
        <g fill="#FFDE00" transform="translate(18,5) scale(0.5)">
          <polygon points="0,-4 1.2,-1.2 4,-1.5 2,0.5 2.5,3.5 0,2 -2.5,3.5 -2,0.5 -4,-1.5 -1.2,-1.2" />
        </g>
        <g fill="#FFDE00" transform="translate(18,9) scale(0.5)">
          <polygon points="0,-4 1.2,-1.2 4,-1.5 2,0.5 2.5,3.5 0,2 -2.5,3.5 -2,0.5 -4,-1.5 -1.2,-1.2" />
        </g>
        <g fill="#FFDE00" transform="translate(15,12) scale(0.5)">
          <polygon points="0,-4 1.2,-1.2 4,-1.5 2,0.5 2.5,3.5 0,2 -2.5,3.5 -2,0.5 -4,-1.5 -1.2,-1.2" />
        </g>
      </svg>
    ),
  },
];

