import { DashboardNavbar } from '../../components/Navbars';
import DashboardDomainOverview from '../../components/DashboardDomainOverview';


export default function Page() {
   return (
      <div>
         <DashboardNavbar />

         {/* add text that says domain overview on the left */}
         {/* Add a button to create a website on the right  */}


         <div className="flex justify-center">
            <div className="w-full md:w-3/6 p-4 space-y-10">
               <DashboardDomainOverview domain="example.com" expirationDate={"Jan 12, 2025"} image='../../public\squarespace_logo.png' />
               <DashboardDomainOverview domain="example.com" expirationDate={"Jan 12, 2025"} image='../../public\squarespace_logo.png' />
               <DashboardDomainOverview domain="example.com" expirationDate={"Jan 12, 2025"} image='../../public\squarespace_logo.png' />
            </div>
         </div>

      </div>
   );
};
