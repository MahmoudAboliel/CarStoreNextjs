import { IoArrowBack, IoArrowForward } from "@/lib/utils";

interface Props {
      func: () => void;
      position: 'right' | 'left';
}
const ArrowButton = ({ func, position }: Props) => {
  return (
    <button 
            onClick={func}
            className={`absolute ${position === 'right' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl p-4 rounded-full hover:bg-black/70 transition opacity-0 hover:opacity-100 group-hover:opacity-100`}
            aria-label={`${position === 'right' ? 'Next slide' : 'Previous slide'}`}
      >
            {position === 'right'
             ? <IoArrowForward />
             : <IoArrowBack />
            }
            
      </button>
  )
}

export default ArrowButton
