import Spinner from '@/components/ui/Spinner';

export default function AboutLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <Spinner text="Loading Our Story..." />
    </div>
  );
}