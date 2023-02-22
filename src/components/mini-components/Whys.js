

export const Whys = (props) => {
  return(
    <div className="flex flex-col bg-cyan rounded-[8px] 
    content-evenly px-8 sm:px-16 lg:px-8 sm:flex-row lg:flex-col sm:gap-10 lg:gap-0 pb-11 md:pb-0 lg:pb-11">
      <img src={props.img} alt={props.alt} className="self-center h-[72px] mt-16 mb-14"/>
      <div className="flex flex-col justify-center">
        
        <h1 className="text-center font-fraunces font-black text-cream text-2xl mb-6 sm:mb-4 lg:mb-6
        sm:text-left lg:text-center">{props.title}</h1>
        <p className="text-center font-barlow sm:text-left lg:text-center text-cream xl:text-lg leading-7">{props.text}</p>
      </div>

    </div>
  )
}