import { WorldData } from '@/components/world-data/WorldData';
import { Suspense } from 'react';


export default async function Home() {
  return (
    <section>
      <h1>Welcome to S_PTecn_D_SFact24_G</h1>
      <p>Explore information about countries around the world.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <WorldData />
      </Suspense>
    </section>
  );
}
