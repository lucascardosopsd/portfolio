interface WhatsappIconProps {
  size: number;
  color?: string;
}

const WhatsappIcon = ({ size, color = "#ffff" }: WhatsappIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.009 1C17.5333 1.00373 14.1184 1.91155 11.1 3.6342C8.08158 5.35685 5.56368 7.83503 3.79382 10.8251C2.02396 13.8151 1.06307 17.2141 1.00564 20.6878C0.948199 24.1615 1.79619 27.5903 3.46623 30.6372L1 41L11.3675 38.5349C14.0415 40.0011 17.0154 40.8369 20.0621 40.9784C23.1087 41.12 26.1474 40.5635 28.9459 39.3515C31.7444 38.1395 34.2287 36.304 36.2089 33.9855C38.1892 31.6669 39.6129 28.9265 40.3714 25.9737C41.1299 23.021 41.203 19.934 40.5852 16.9486C39.9674 13.9633 38.675 11.1586 36.8067 8.74897C34.9385 6.33931 32.5439 4.38843 29.8059 3.04541C27.0679 1.70238 24.059 1.00276 21.009 1ZM11.0045 10.0884H16.4582C16.705 10.0884 16.9417 10.1864 17.1162 10.3608C17.2908 10.5353 17.3888 10.7719 17.3888 11.0186C17.3583 12.2592 17.5668 13.494 18.003 14.6558C18.1909 15.0447 18.2322 15.4883 18.1194 15.9052C18.0066 16.3221 17.7472 16.6844 17.3888 16.9256L15.481 18.786C16.3269 20.4373 17.433 21.9417 18.7569 23.2419C20.0471 24.5867 21.5461 25.7144 23.1961 26.5814L25.0574 24.6744C25.988 23.7442 26.4161 23.7442 27.3282 24.0605C28.4905 24.4965 29.7259 24.7049 30.967 24.6744C31.2102 24.6857 31.4404 24.7874 31.6125 24.9594C31.7847 25.1315 31.8864 25.3616 31.8977 25.6047V31.0558C31.8864 31.2989 31.7847 31.529 31.6125 31.701C31.4404 31.8731 31.2102 31.9747 30.967 31.986C25.4926 31.7476 20.3033 29.4792 16.4116 25.6233C12.5479 21.7374 10.2773 16.5481 10.046 11.0744C10.0482 10.8184 10.149 10.573 10.3275 10.3894C10.5061 10.2057 10.7485 10.0979 11.0045 10.0884Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default WhatsappIcon;
