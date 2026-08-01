'use client';

import Link from 'next/link';
import type { ComponentProps, MouseEvent } from 'react';

type DocumentLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'prefetch'> & {
  href: string;
};

export default function DocumentLink({ href, onClick, target, ...props }: DocumentLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.defaultPrevented || event.button !== 0 || isModifiedClick || target === '_blank') {
      return;
    }

    event.preventDefault();
    window.location.assign(href);
  };

  return <Link {...props} href={href} target={target} prefetch={false} onClick={handleClick} />;
}
