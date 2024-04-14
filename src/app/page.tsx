import { Home as HomeScreen } from '@/screens/Home';
import { CurrentTime } from '@/types/timeapi';

const getData = async (): Promise<CurrentTime> => {
  const res = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Warsaw', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default async function Home() {
  const data = await getData();

  return <HomeScreen currentDateTime={data.dateTime} />;
}
