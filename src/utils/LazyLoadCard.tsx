import { DateCovid } from "@/interface/main";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const DynamicCards = dynamic(() => import("../components/Cards"), {
  loading: () => <div>Loading...</div>,
});

const LazyLoadCard = ({item,index}) => {
  const {ref, inView} = useInView({
    triggerOnce:true,
    threshold: 0.1
  });

  return <>
    <div ref={ref}>
      {inView ? <DynamicCards item={item} index={index} /> : <p>Loading...</p>}
    </div>
  </>;
};

export default LazyLoadCard;
