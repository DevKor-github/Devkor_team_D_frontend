import styles from './index.module.css';

interface SizeProp extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
}

function guard(x: string | undefined): string {
  return x || '72px';
}

export const CloseIcon = ({ width, height, ...props }: SizeProp) => (
  <svg
    className={styles.line}
    width={guard(width)}
    height={guard(height)}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="2" y1="2" x2="30" y2="30" stroke-width="3" />
    <line x1="2" y1="30" x2="30" y2="2" stroke-width="3" />
  </svg>
);

export const LeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className={styles.line} width="17" height="32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M 15 2 L 2 16 L 15 30" stroke-width="3" fill="none" />
  </svg>
);

export const RightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" fill="none" style={props.style}>
    <path stroke="#9B9B9B" stroke-linecap="square" stroke-width="1.5" d="m2 2 10 9.5L2 21" />
  </svg>
);

export const DownIcon = ({ width, height, ...props }: SizeProp) => (
  <svg
    className={styles.line}
    xmlns="http://www.w3.org/2000/svg"
    width={guard(width)}
    height={guard(height)}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 9l6 6 6-6" fill="none" stroke-width="2" />
  </svg>
);

export const UpIcon = ({ width, height, ...props }: SizeProp) => (
  <svg
    className={styles.line}
    xmlns="http://www.w3.org/2000/svg"
    width={guard(width)}
    height={guard(height)}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 15l6-6 6 6" fill="none" stroke-width="2" />
  </svg>
);

export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height="100" width="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <polygon points="12,17.27 18.18,21 16.54,13.97 22,9.24 14.81,8.63 12,2 9.19,8.63 2,9.24 7.46,13.97 5.82,21 12,17.27" />
  </svg>
);

export const MagnifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={styles.line}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const LogoIcon = () => (
  <svg
    className={styles.fill}
    width="18"
    height="28"
    viewBox="0 0 50 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45 24.8728C45 20.2311 41.2371 16.4683 36.5954 16.4683C31.9538 16.4683 28.1909 20.2311 28.1909 24.8728V60.7536C28.1909 65.3953 31.9538 69.1582 36.5954 69.1582C41.2371 69.1582 45 65.3953 45 60.7536V24.8728Z"
      fill="#E84351"
    />
    <path
      d="M24.0056 23.8015C24.0056 18.017 28.7353 13.2873 34.5198 13.2873C39.7088 13.2873 44.0302 17.0983 44.8808 22.0321C44.6086 9.85065 34.5198 0 22.4574 0C10.2079 0 0.0340264 10.1058 0 22.4915V57.2324C0 63.7995 5.35916 69.1587 11.9263 69.1587C18.4934 69.1587 23.8525 63.7995 23.8525 57.2324C23.9036 55.8033 23.9546 54.3742 24.0226 52.9451V23.8015H24.0056Z"
      fill="#FDCED1"
    />
  </svg>
);

export const LogoIconBig = () => (
  <svg
    className={styles.fill}
    width="45"
    height="70"
    viewBox="0 0 45 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45 24.8728C45 20.2311 41.2371 16.4683 36.5954 16.4683C31.9538 16.4683 28.1909 20.2311 28.1909 24.8728V60.7536C28.1909 65.3953 31.9538 69.1582 36.5954 69.1582C41.2371 69.1582 45 65.3953 45 60.7536V24.8728Z"
      fill="#E84351"
    />
    <path
      d="M24.0056 23.8015C24.0056 18.017 28.7353 13.2873 34.5198 13.2873C39.7088 13.2873 44.0302 17.0983 44.8808 22.0321C44.6086 9.85065 34.5198 0 22.4574 0C10.2079 0 0.0340264 10.1058 0 22.4915V57.2324C0 63.7995 5.35916 69.1587 11.9263 69.1587C18.4934 69.1587 23.8525 63.7995 23.8525 57.2324C23.9036 55.8033 23.9546 54.3742 24.0226 52.9451V23.8015H24.0056Z"
      fill="#FDCED1"
    />
  </svg>
);

export const BookmarkIcon = ({ height, width }: SizeProp) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={guard(width)} height={guard(height)}>
    <path d="M6 2h12a2 2 0 0 1 2 2v18l-8-3-8 3V4a2 2 0 0 1 2-2z" fill="inherit" />
  </svg>
);

export const CheckedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <rect width="24" height="24" fill="#DC143C" rx="3" />
    <path stroke="#fff" stroke-linecap="round" stroke-width="2" d="m6 11.25 4.5 4.5 8.25-8.25" />
  </svg>
);

export const UncheckedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <rect width="23" height="23" x=".5" y=".5" stroke="#B7B7B7" rx="2.5" />
    <path stroke="#B7B7B7" stroke-linecap="round" stroke-width="2" d="m6 11.25 4.5 4.5 8.25-8.25" />
  </svg>
);

export const ToggledIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none">
    <rect width="20" height="20" x=".5" y=".5" stroke="#DC143C" rx="10" />
    <rect width="15" height="15" x="3" y="3" fill="#DC143C" rx="7.5" />
  </svg>
);

export const FinishIcon = () => (
  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="19.5" cy="19.5" r="18.5" stroke="#DC143C" stroke-width="2" />
    <path d="M10.2354 19.968L16.7751 26.706L28.7648 14.353" stroke="#DC143C" stroke-width="3" stroke-linecap="round" />
  </svg>
);
