

export const Coffee = (props) => {
  return(
    <div className="flex flex-col sm:flex-row lg:flex-col">
      <img src={props.img} alt={props.alt} className="scale-75 sm:scale-85 lg:scale-100 lg:max-h-[187px] 2xl:max-h-[200px] lg:mb-14"/>
      <div className="flex flex-col justify-center sm:ml-[-80px] md:ml-[-50px] lg:ml-0">
        <h1 className="font-fraunces font-black text-3xl text-center md:text-left lg:text-center text-greyblue mb-6">{props.title}</h1>
        <p className="font-barlow text-lg text-greyblue text-center md:text-left lg:text-center sm:max-w-[300px] lg:max-w-none">{props.text}</p>
      </div>
      
    </div>
  )
}