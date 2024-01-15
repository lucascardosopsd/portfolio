interface LinkedinIconProps {
  size?: number;
  color?: string;
}

const LinkedinIcon = ({ size, color = "#ffff" }: LinkedinIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.9224 24.2346V34.7932H29.1266V24.965C29.1266 22.3932 28.0645 20.6394 25.7272 20.6394C23.9383 20.6394 22.9424 21.8236 22.4817 22.9629C22.3066 23.3753 22.3348 23.945 22.3348 24.5174V34.7932H15.6017C15.6017 34.7932 15.6893 17.3863 15.6017 15.8036H22.3348V18.7843C22.7328 17.4808 24.8852 15.6222 28.3162 15.6222C32.5755 15.6222 35.9224 18.3512 35.9224 24.2346Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.95207 34.7931H11.9438V15.8041H5.95207V34.7931Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3234 10.2275C12.3234 11.8951 11.049 13.2172 9.00759 13.2172H8.96621C6.99793 13.2172 5.72345 11.9013 5.72345 10.231C5.72345 8.52821 7.03586 7.24131 9.04552 7.24131C11.049 7.24131 12.2821 8.52545 12.3234 10.2275Z"
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.9914 41H3.50862C1.98517 41 0.75 39.7648 0.75 38.2414V3.75862C0.75 2.23517 1.98517 1 3.50862 1H37.9914C39.5148 1 40.75 2.23517 40.75 3.75862V38.2414C40.75 39.7648 39.5148 41 37.9914 41Z"
        stroke={color}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkedinIcon;
