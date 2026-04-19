'use client';

import { useId, useState } from 'react';
import { CardActions } from './CardActions';
import { CardHeader } from './CardHeader';
import { MediaPlaceholder } from './MediaPlaceholder';
import { Strong, Text } from './ui/Typography';

const LABEL = 'Information';
const TITLE = 'Treatment Overview';
const SHORT_DESCRIPTION = 'A short summary is shown here.';

export function ExpandableInfoCard() {
  const [expanded, setExpanded] = useState(false);
  const reactId = useId();
  const bodyId = `info-card-body-${reactId}`;
  const titleId = `info-card-title-${reactId}`;

  return (
    <article
      aria-labelledby={titleId}
      className={`flex w-full flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 ${expanded ? 'max-w-xl' : 'max-w-sm'}`}
    >
      <CardHeader label={LABEL} title={TITLE} titleId={titleId} />

      <div id={bodyId} className="flex flex-col gap-5">
        {expanded ? (
          <Text size="base">
            This expanded area gives <Strong>more context</Strong> about the topic. It should remain
            easy to read, visually calm, and clearly structured across different screen sizes.
          </Text>
        ) : (
          <Text>{SHORT_DESCRIPTION}</Text>
        )}

        <MediaPlaceholder size={expanded ? 'large' : 'small'} />
      </div>

      <CardActions
        expanded={expanded}
        controlsId={bodyId}
        onOpen={() => setExpanded(true)}
        onClose={() => setExpanded(false)}
        onContinue={() => console.log('Continue clicked')}
      />
    </article>
  );
}
