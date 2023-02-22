

export const Headquarters = (props) => {
  return(
    <div className="flex flex-col items-center sm:items-start">
      <img src={props.img} alt="" className="h-[50px] w-[50px] mb-12"/>
      <div>
        <h1 className="font-fraunces font-black text-center sm:text-left text-greyblue text-[1.5rem] mb-6 lg:text-3xl">{props.country}</h1>
        <ul className="flex flex-col gap-2 text-center font-barlow sm:text-left text-greyblue">
          <li>{props.infos[0]}</li>
          <li>{props.infos[1]}</li>
          <li>{props.infos[2]}</li>
          <li>{props.infos[3]}</li>
          
        </ul>
      </div>

    </div>
  )
}