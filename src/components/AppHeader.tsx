import { useScrolled } from '@/hooks/use-scrolled';
import { cn } from '@/utils/cn';
import { Logo } from './Logo';

export function AppHeader() {
  const scrolled = useScrolled();

  return (
    <div className={cn('flex items-center gap-2 px-6 py-1 top-0 sticky transition-colors', scrolled && 'bg-white/20')}>
      <Logo />
    </div>
  );
}
