import TrackingPage from '@/components/track/TrackingPage';

interface PageProps {
  params: {
    token: string;
  };
}

export default function TrackPage({ params }: PageProps) {
  return <TrackingPage token={params.token} />;
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: 'Track Trip — RouteX',
    description: 'Track your RouteX trip in real-time',
  };
}
