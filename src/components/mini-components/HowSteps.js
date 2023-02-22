

export const HowSteps = (props) => {
  const dark = props.textdark ==="yes" ? "text-greyblue" : "text-cream";
  const transparent = props.transparent ==="yes" ? "bg-transparent" : "bg-cream"

  return(
    <div className="flex flex-col gap-6 sm:gap-10 mb-14 ">
      <div className=" hidden sm:flex items-center">
        <div className={`${transparent} w-[32px] h-[32px] z-20 border-2 rounded-full border-cyan`}></div>
        <div className="ml-[-16px] bg-pale w-2/3 h-1"></div>
      </div>
      

      <h1 className="font-fraunces font-black text-7xl text-pale text-center sm:text-left ">{props.bigtitle}</h1>
      <h2 className={`font-fraunces font-black text-3xl lg:text-4xl text-center sm:text-left ${dark} sm:max-w-[200px]`}>{props.smalltitle}</h2>
      <p className={`font-barlow text-base text-center sm:text-left ${dark}`}>{props.text}</p>
    </div>
  )
}