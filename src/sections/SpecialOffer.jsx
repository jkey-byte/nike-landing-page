import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import CustomButton from '../components/CustomButton';

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt='' width={773} height={683} className='object-contain w-full' />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From
          premier selections to incredible savings, we offer unparalleled quality and value for all
          our customers.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possiblities designed to make your shopping experience a breeze
          surpassing the loftiest of expectations. Your journey with Nike is nothing short of
          extraordinary.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <CustomButton label='Shop now' iconURL={arrowRight} />
          <CustomButton
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
