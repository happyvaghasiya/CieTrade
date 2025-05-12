import React, { useState, useEffect } from 'react';
import Visitus from '../readthepost/visitus';
import CieTradelaunchesupdated from '../readthepost/cieTradelaunchesupdated';
import CieTradelaunchesanautomated from '../readthepost/cieTradelaunchesanautomated';
import Solasvgm from '../readthepost/Solasvgm';
import Whattoaskbefore from '../readthepost/what-to-ask-before';
import Cietradeofferanew from '../readthepost/cietradeofferanew';
import Cietradelaunchescloud from '../readthepost/cietrade-launches-cloud';
import Cietradeonlinecustomerreporting from '../readthepost/cietrade-online-customer-reporting';
import Cietradeatthe2016paper from '../readthepost/cietrade-at-the-2016-paper';
import Cietradeintroducesinventory from '../readthepost/cietrade-introduces-inventory';
import Redefiningwaste from '../readthepost/redefining-waste';
import VisitcieTrade from '../readthepost/visitcieTrade';
import Cietradeatthe2024 from '../readthepost/cietradeatthe2024';
import CieTradefeatured from '../readthepost/cieTradefeatured';
import Checkoutlocation from '../readthepost/checkoutlocation';
import Checkoutcustomer from '../readthepost/checkoutcustomer';
import VisitPRSE2024 from '../readthepost/visitPRSE2024';
import Updatedmobile from '../readthepost/updatedmobile';
import VisitISRI2024 from '../readthepost/visitISRI2024';
import Visitatthe2024 from '../readthepost/visitatthe2024';
import Visitplasticsrecycling from '../readthepost/visitplasticsrecycling';
import CieTradeintroduces from '../readthepost/cieTradeintroduces';
import Checkouttradeshow from '../readthepost/checkouttradeshow';
import Easilysendpacking from '../readthepost/easilysendpacking';
import VisitPPRC2023 from '../readthepost/visitPPRC2023';
import Visitscrapexpo2023 from '../readthepost/visitscrapexpo2023';
import Cietradeatthe2023 from '../readthepost/cieTradeatthe2023';
import Keepingyourbusiness from '../readthepost/keeping-your-business';
import Accountingintegration from '../readthepost/accountingintegration';
import VisitISRI2023 from '../readthepost/visitISRI2023';
import Visitatthe2023 from '../readthepost/visitatthe2023';
import VisitPPRC2022 from '../readthepost/visitPPRC2022 ';
import ISRIwelcomearticle from '../readthepost/ISRIwelcomearticle';
import UpdatedcieMobileapp from '../readthepost/updatedcieMobileapp';
import Helpingwasterecycling from '../readthepost/helpingwaste&recycling';
import CieTradefeaturedinglobal from '../readthepost/cieTradefeaturedinglobal';
import Newoceanshipping from '../readthepost/newoceanshipping';
import ClickBalebycieTrade from '../readthepost/clickBalebycieTrade';
import OurnewciePhotovideo from '../readthepost/ournewciePhotovideo';
import CieTradeoffersnewcloud from '../readthepost/cieTradeoffersnewcloud';
import Thingstolookfor from '../readthepost/10-things-to-look-for';
import Thehiddencostofrunning from '../readthepost/the-hidden-cost-of-running';
import Excitingchangeshappening from '../readthepost/exciting-changes-happening';
import Cietradenewservicecontract from '../readthepost/Cietrade-new-service-contract';

const PageList = [Solasvgm, Whattoaskbefore, Cietradeofferanew, Cietradelaunchescloud, Cietradeonlinecustomerreporting, Cietradeatthe2016paper, Cietradeintroducesinventory, Redefiningwaste, Keepingyourbusiness, Thingstolookfor,Thehiddencostofrunning,Excitingchangeshappening,Cietradenewservicecontract,CieTradeoffersnewcloud,OurnewciePhotovideo,ClickBalebycieTrade,Newoceanshipping,CieTradefeaturedinglobal,Helpingwasterecycling,UpdatedcieMobileapp,ISRIwelcomearticle,VisitPPRC2022,Visitatthe2023,VisitISRI2023,Accountingintegration,Cietradeatthe2023,Visitscrapexpo2023,VisitPPRC2023,Easilysendpacking,Checkouttradeshow,CieTradeintroduces,Visitplasticsrecycling,Visitatthe2024,VisitISRI2024,Updatedmobile,VisitPRSE2024,Checkoutcustomer,Checkoutlocation,CieTradefeatured,Cietradeatthe2024,VisitcieTrade,CieTradelaunchesanautomated,CieTradelaunchesupdated,Visitus];

function Readthepost() {
  const [currentPage, setCurrentPage] = useState(() =>
    parseInt(localStorage.getItem('currentPage')) || 0
  );

  useEffect(() => localStorage.setItem('currentPage', currentPage), [currentPage]);
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [currentPage]);

  const changePage = (offset) => setCurrentPage((prev) => prev + offset);

  const CurrentPage = PageList[currentPage];

  return (
    <div>
      <CurrentPage />
      <div className="flex justify-between mt-4">
        <button
          onClick={() => changePage(-1)}
          disabled={currentPage === 0}
          className={`mx-3 mb-3 text-red-600 transition-opacity duration-300 ${currentPage === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
          <i className="fa-solid fa-arrow-left text-sm px-2"></i> Previous Post
        </button>
        <button
          onClick={() => changePage(1)}
          disabled={currentPage === PageList.length - 1}
          className={`mx-3 mb-3 text-red-600 transition-opacity duration-300 ${currentPage === PageList.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
          Next Post <i className="fa-solid fa-arrow-right text-sm px-2"></i>
        </button>
      </div>
    </div>
  );
}

export default Readthepost;