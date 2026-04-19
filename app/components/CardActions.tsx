import { Button } from './ui/Button';

type CardActionsProps = {
  expanded: boolean;
  controlsId?: string;
  onOpen: () => void;
  onClose: () => void;
  onContinue: () => void;
};

export function CardActions({
  expanded,
  controlsId,
  onOpen,
  onClose,
  onContinue,
}: Readonly<CardActionsProps>) {
  if (!expanded) {
    return (
      <Button onClick={onOpen} aria-expanded={expanded} aria-controls={controlsId} fullWidth>
        Open
      </Button>
    );
  }

  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
      <Button
        variant="secondary"
        onClick={onClose}
        aria-expanded={expanded}
        aria-controls={controlsId}
        className="sm:min-w-30"
      >
        Close
      </Button>
      <Button onClick={onContinue} className="sm:min-w-30">
        Continue
      </Button>
    </div>
  );
}
