import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

import Chatbot from '../components/Chatbot';
import Features from '../components/Features';
import About2 from '../components/About2';
import Footer from '../components/Footer';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      {/* <div className='flex flex-col gap-6 p-28 px-3 max-w-[1400px] mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find <span className='text-slate-500 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400'>Spaces </span>
          <br />
          That Match Your Lifestyle...
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Discover handpicked properties to buy, rent, or sell.
          Smart filters, rich visuals, and personalized recommendations make it easy to find your perfect space.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
                    <Link
              to="/search"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold text-center rounded-full shadow-lg transition-all duration-500 ease-in-out border-2 border-transparent hover:border-white hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.6)]"
            >
              Explore Listings...
            </Link>



      </div> */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 p-10 max-w-[1400px] mx-auto">
  
  {/* Text Section */}
  <div className="flex flex-col gap-6 flex-1">
    <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
      Find <span className="text-slate-500 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Spaces</span>
      <br />
      That Match Your Lifestyle...
    </h1>

    <div className="text-gray-400 text-xs sm:text-sm">
      Discover handpicked properties to buy, rent, or sell.
      Smart filters, rich visuals, and personalized recommendations make it easy to find your perfect space.
      <br />
      We have a wide range of properties for you to choose from.
    </div>

    <Link
      to="/search"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold text-center rounded-full shadow-lg transition-all duration-500 ease-in-out border-2 border-transparent hover:border-white hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.6)]"
    >
      Explore Listings...
    </Link>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center items-center">
  <img
    // src="https://img.freepik.com/premium-photo/real-estate-image-background-beautiful-house-front-view_800563-4682.jpg"
    src='https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003972.jpg?t=st=1745873546~exp=1745877146~hmac=c249fec57b9f8723843295b9ca7b827138d4ffd05c18ba06cd915c52fd9a643a&w=996'
    alt="About Us"
    className="w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-full shadow-2xl transition-transform duration-500 hover:-rotate-3 hover:scale-105  "
  />
</div>


</div>



      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            // ✅ Moved key prop to SwiperSlide (was previously on inner div)
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>


      {/* listing results for offer, sale and rent */}

      {/* <div className='max-w-[1400px] mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-row gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div> */}
      <div className='max-w-[1400px] mx-auto p-3 flex flex-col gap-8 my-10'>
  {offerListings && offerListings.length > 0 && (
    <div className=''>
      <div className='my-3'>
        <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
        <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {offerListings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  )}
  
  {rentListings && rentListings.length > 0 && (
    <div className=''>
      <div className='my-3'>
        <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
        <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {rentListings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  )}

  {saleListings && saleListings.length > 0 && (
    <div className=''>
      <div className='my-3'>
        <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
        <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {saleListings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  )}
</div>


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {/* chatbot */}
        <Chatbot />
        {/* features */}
        <Features />

        <img src="https://as2.ftcdn.net/v2/jpg/06/30/56/07/1000_F_630560706_VOi3H6OtB7FSrle4pFx6zm4NYcRKEZEZ.jpg" alt="" />

        {/* about */}
        <About2 />
        <img src="https://as1.ftcdn.net/v2/jpg/10/51/39/00/1000_F_1051390087_gvs0hXNQ0cAHEGcD16QMM73wQrCleeIe.jpg" alt="" />

      </div>
      <div className=' p-3 flex flex-col gap-8 my-10 '>
        <img src="https://dhcmi.org/sites/default/files/banner/detroit_skyline.jpg" alt="" />
        {/* <img src="https://as2.ftcdn.net/v2/jpg/07/02/48/55/1000_F_702485551_NB6ORLjvaUSKRFP0UuLTJXtmDRnZvdT0.jpg" alt="" /> */}
      </div>
      {/* footer............. */}
      <Footer />
    </div>
  );
}
