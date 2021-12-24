import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallerCard from '../components/SmallerCard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Air-bnb Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> 
            Explore Nearby
          </h2>

          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {
              exploreData?.map(item => (
                <SmallerCard
                  key={item.img}
                  img={item.img} 
                  distance={item.distance} 
                  location={item.location} />
              ))
          }
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> 
            Live Anywhere
          </h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {
            cardsData?.map(item => (
              <MediumCard
              img ={item.img}
              title={item.title}
              />
            ))
          }
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj' title='The Greatest Outdoors'
          desc='Wishlists created by Airbnb'
          buttonText='Get Inspired'
        />

      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData: exploreData,
      cardsData
    }
  }
}
