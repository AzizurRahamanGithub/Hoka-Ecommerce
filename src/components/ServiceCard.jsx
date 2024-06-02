
const ServiceCard = ({imgURL,label,a}) => {
  return (
    <div className=" flex-1 sm:min-w-[350px] shadow-2xl rounded-xl px-10 py-20">
      <div className="flex bg-[#0083BF] w-11  h-11 rounded-full justify-center items-center">
      <img src={imgURL} alt={label} className=" w-6  " />
      </div>
      

      <h2 className="mt-5  text-black text-3xl font-bold">{label}</h2>

      <p className="w-full text-lg font-montserrat mt-5 leading-6 tracking-wide">{a}</p>
      
    </div>
  )
}
export default ServiceCard
