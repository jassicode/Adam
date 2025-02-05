import { getTechnicalMarineStores } from '@/services';
import TechnicalMarineStoresTemplate from "@/templates/TechnicalMarineStores"

const TechnicalMarineStores = async () => {
    const data = await getTechnicalMarineStores();
   // console.log(data);
    return <TechnicalMarineStoresTemplate {...data} />
}

export default TechnicalMarineStores