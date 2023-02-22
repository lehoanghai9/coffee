import { useState } from "react"
import icon from "../assets/plan/desktop/icon-arrow.svg"

export const Options = () => {
  const data = [
    {
      question: "How do you drink your coffee?",
      title: "Preferences",
      num:"01",
      options: [
        {
          title: "Capsule",
          text: "Compatible with Nespresso systems and similar brewers."
        },
        {
          title: "Filter",
          text: "For pour over or drip methods like Aeropress, Chemex, and V60."
        },
        {
          title: "Espresso",
          text: "Dense and finely ground beans for an intense, flavorful experience."
        },
        
      ]
    },
    {
      question: "What type of coffee?",
      title: "Bean Type",
      num:"02",
      options: [
        {
          title: "Single origin",
          text: "Distinct, high quality coffee from a specific family-owned farm."
        },
        {
          title: "Decaf",
          text: "Just like regular coffee, except the caffeine has been removed.",
        },
        {
          title: "Blended",
          text: "Combination of two or three dark roasted beans of organic coffees."
        }
      ] 
    },
    {
      question: "How much would you like?",
      title: "Quantity",
      num:"03",
      options: [
        {
          title: "250g",
          text: "Perfect for the solo drinker. Yields about 12 delicious cups."
        },
        {
          title: "500g",
          text: "Perfect option for a couple. Yields about 40 delectable cups."
        },
        {
          title: "1000g",
          text: "Perfect for offices and events. Yields about 90 delightful cups."
        }
      ]
    },
    {
      question: "Want us to grind them?",
      title: "Grind Option",
      num:"04",
      options: [
        {
          title: "Wholebean",
          text: "Best choice if you cherish the full sensory experience."
        },
        {
          title: "Filter",
          text: "For drip or pour-over coffee methods such as V60 or Aeropress."
        },
        {
          title: "Cafetiére",
          text: "Course ground beans specially suited for french press coffee."
        },
      ]
    },
    {
      question: "How often should we deliver?",
      title: "Deliveries",
      num:"05",
      options: [
        {
          title: "Every week",
          text: "14.00€ per shipment. Includes free first-class shipping."
        },
        {
          title: "Every 2 weeks",
          text: "17.25€ per shipment. Includes free priority shipping."
        },
        {
          title: "Every month",
          text: "22.50€ per shipment. Includes free priority shipping."
        }
      ]
    },
    
  ]

  const [showOrder, setShowOrder] = useState(false);

  const[price, setPrice] = useState(null)

  const [openStates, setOpenStates] = useState(new Array(data.length).fill(false));

  const [selects, setSelects] = useState(new Array(data.length).fill("____"));

  
  const orderToggle = () => {
    setShowOrder(!showOrder);
    if(showOrder){
      document.body.style.overflowY = "auto"
    } else{
      document.body.style.overflowY = "hidden"
    }
  }

  const choose = (index, value, text) => {
    if(index === data.length-1){
      setPrice(text.split(" ")[0])
    }

    setSelects(prevSelects => {
      if (value === selects[index]){
        const newSelects = [...prevSelects];
        newSelects[index] = "____";
        return newSelects;
      } else{
        const newSelects = [...prevSelects];
        newSelects[index] = value;
        return newSelects;
      }
      
    });
  };

  const toggle = (index) => {
  setOpenStates(openStates.map((state, i) => i === index ? !state : state));}



  return (
    <div className="flex xl:justify-around mt-28 sm:mt-32 lg:mt-36">
      <div className="hidden xl:flex flex-col gap-6 h-1 sticky top-20 mb-[520px]">
        {data.map((item, i) =>{

          const isDone = selects[i]

          return(
            <div >
              <section key={i} className={`${isDone === "____" ? "flex text-grey opacity-30" : "text-greyblue flex" } duration-300 gap-8 `}>
              <h1 className={`${isDone ==="____" ? "" : "text-cyan"} text-3xl font-fraunces font-black
               `}>{item.num}</h1>
              <h1 className={`text-3xl font-fraunces font-black`}>{item.title}</h1>
              
            </section>
            <hr className="bg-grey mt-6"/>
            </div>
            
          )
        })}
          
      </div>


      <div>
      {data.map((item, i) => {
        const isOpen = openStates[i];
        return (
          <div key={i} className="mb-12 sm:mb-24">
            <div className="flex justify-between items-center mb-8 cursor-pointer"
            onClick={() => toggle(i)}>
              <h1 className="font-fraunces font-black text-grey text-2xl sm:text-4xl lg:text-5xl max-w-[240px] select-none sm:max-w-none">{item.question}</h1>
              <img src={icon} className={`w-[18px] h-[12px] ease-in duration-300  ${isOpen ? "rotate-180" : ""}`} alt=""/>
            </div>
            
            <div className={`${isOpen ? "closed show" : "closed"} flex flex-col sm:flex-row gap-4 `}>
              {item.options.map((option, j) => {
                const chosen = selects[i];
                return (

                  <div key={j} className={`${chosen === option.title ? "bg-cyan text-cream " : "bg-caps text-greyblue hover:bg-pale duration-500"} cursor-pointer duration-300 
                   rounded-[8px] p-6 h-[140px] sm:h-[250px] xl:max-w-[230px] select-none`}
                   onClick={() => choose(i, option.title, option.text)}>
                    <h2 className="font-fraunces font-black text-2xl mb-2 sm:mb-6">{option.title}</h2>
                    <p className="font-barlow">{option.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}


        <div className=" bg-greyblue w-full rounded-[12px] px-6 py-8 sm:px-10 lg:px-16 lg:py-10 xl:max-w-[729px]">
          <h2 className="font-barlow text-cream mb-2">ORDER SUMMARY</h2>
          <h1 className="font-fraunces font-black text-cream text-2xl leading-loose">“I drink coffee <span className="text-cyan">{selects[0]}</span> , with a <span className="text-cyan">{selects[1]}</span> type of bean. <span className="text-cyan">{selects[2]}</span> ground ala <span 
          className="text-cyan">{selects[3]}</span> ,
          sent to me <span className="text-cyan">{selects[4]}</span> .”</h1>
        </div>
        <div className={`flex justify-center xl:float-right mt-14 sm:mt-11`}>
          <button className={`${selects.every(val => val !== "____") ? "bg-cyan hover:bg-hoverbutton" : "bg-notavailable cursor-not-allowed opacity-50"} font-fraunces text-cream font-black w-[220px] h-[56px]  rounded-[6px]  duration-300  mt-6`} onClick={() => {
          if (selects.every(val => val !== "____")) {
          orderToggle();
          }
        }}>
          Create your plan!</button>
        </div>

        {showOrder &&
         <div className="modal w-screen h-screen top-0 left-0 right-0 bottom-0 fixed z-30">
          <div className="overlay w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-grey opacity-75 " onClick={orderToggle}></div>
          
          <div className=" modal-content min-w-[330px] max-w-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-greyblue p-6 rounded-t-[8px] px-6 sm:px-14">
              <h1 className="font-fraunces font-black text-cream
               text-3xl">Order Summary</h1>

            </div>
            <div className="px-6 sm:px-14 sm:pb-14 pt-10 pb-6 bg-cream rounded-b-[8px]">
            <h1 className="font-fraunces font-black text-grey text-2xl leading-loose mb-2">“I drink coffee <span className="text-cyan">{selects[0]}</span> , with a <span className="text-cyan">{selects[1]}</span> type of bean. <span className="text-cyan">{selects[2]}</span> ground ala <span 
          className="text-cyan">{selects[3]}</span> ,
          sent to me <span className="text-cyan">{selects[4]}</span> .”</h1>

          <p className="text-greyblue font-barlow text-base mb-4">Is this correct? You can proceed to checkout or go back to plan selection if something 
  is off. Subscription discount codes can also be redeemed at the checkout.</p>
          
          <div>
            <button className='lg:hidden font-fraunces text-cream font-black w-full h-[56px] bg-cyan rounded-[6px] hover:bg-hoverbutton duration-300  mt-6 text-lg'>
          Checkout - {price} / mo
        </button>
        <div className="hidden lg:flex justify-around items-center mt-10">
          <h1 className="font-fraunces font-black text-3xl text-greyblue">{price} / mo</h1>
          <button className=' w-[220px] font-fraunces text-cream font-black h-[56px] bg-cyan rounded-[6px] hover:bg-hoverbutton duration-300  text-lg'>
          Checkout
        </button>
        </div>
          
          
          </div>
          
            </div>
          </div>
          
         </div>
         }
        
    </div>
    </div>
    
  );  
  
}