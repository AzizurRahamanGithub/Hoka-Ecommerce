
import {ReviewCard} from '../components';
import {reviews} from '../constants';

const CustomerReviews = () => {
  return (
    <section className="mt-16 max-container">
      <div className=" w-full flex flex-col justify-center items-center ">
        <h2 className="font-semibold text-4xl font-palanquin text-center">
        What Our <span className='text-[#0083bf]'>Customers</span> Say?
        </h2>
        <p className="mt-5 max-w-lg text-center info-text">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className="mt-20 flex flex-col lg:flex-row  gap-14 justify-evenly items-center">
        {reviews.map((review,index)=>(
          <ReviewCard 
          key={index}
          imgURL={review.imgURL}
          feedback={review.feedback}
          rating={review.rating}
          customerName={review.customerName}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
