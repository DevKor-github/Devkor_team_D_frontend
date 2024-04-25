interface ToggleProps {
  value: boolean;
  label: string;
  onClick: () => unknown;
  [key: string]: unknown;
}

export default function Toggle({ value, label, ...restProps }: ToggleProps) {
  return (
    <button
      tabIndex={0}
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', background: 'none', border: 'none' }}
      {...restProps}
    >
      <span
        style={{
          display: 'inline-block',
          minWidth: '18px',
          minHeight: '18px',
          aspectRatio: 1,
          background: value ? 'red' : 'none',
          border: 'solid 1px black',
          borderRadius: '4px',
        }}
      />
      {label}
    </button>
  );
}