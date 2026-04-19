import { Badge, Heading } from './ui/Typography';

type CardHeaderProps = {
  label: string;
  title: string;
  titleId?: string;
};

export function CardHeader({ label, title, titleId }: Readonly<CardHeaderProps>) {
  return (
    <header className="flex flex-col gap-3">
      <Badge>{label}</Badge>
      <Heading id={titleId}>{title}</Heading>
      <hr className="border-t border-zinc-200" />
    </header>
  );
}
