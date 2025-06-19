import Spinner from '@/components/ui/Spinner'; // Your reusable spinner

export default function Loading() {
  // This component will now cover the entire screen for the /contactus route
  // while the server prepares the page.
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner text="Loading Contact Page..." />
    </div>
  );
}