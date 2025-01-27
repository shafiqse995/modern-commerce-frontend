import { Skeleton } from './ui/skeleton';
export default function ProductLoadingSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[296px] w-[296px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[296px]" />
          <Skeleton className="h-4 w-[296px]" />
        </div>
      </div>
    </div>
  );
}
