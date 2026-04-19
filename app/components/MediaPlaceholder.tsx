type MediaPlaceholderProps = {
  size?: 'small' | 'large';
  label?: string;
};

const sizeStyles: Record<NonNullable<MediaPlaceholderProps['size']>, string> = {
  small: 'h-24',
  large: 'h-44 sm:h-52',
};

export function MediaPlaceholder({
  size = 'small',
  label = 'Media Placeholder',
}: Readonly<MediaPlaceholderProps>) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-sm font-medium text-zinc-400 ${sizeStyles[size]}`}
    >
      {label}
    </div>
  );
}
