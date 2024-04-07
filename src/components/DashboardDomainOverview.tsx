import "../styles/DashboardDomainOverview.css"
import Image from 'next/image';

// Displays an overview of the Domain you bought.
// Shows domain name, expiration date, and an image of the domain website if available.

type DashboardDomainOverviewProps = {
   domain: string;
   expirationDate: string;
   image: string;
}

export default function DashboardDomainOverview(props: DashboardDomainOverviewProps) {
   return (
      <div className="relative">

         <div className="absolute inset-0 bg-white opacity-5"></div> {/* Background overlay */}
         <div className="z-10 flex">
            <div>
               <Image
                  src="/domainImage.jpg"
                  alt="none"
                  width={300}
                  height={300}
               />
            </div>
            <div className="flex flex-col justify-center text-white mx-5">
               <p>Domain: {props.domain}</p>
               <p>Expiration Date: {props.expirationDate}</p>
            </div>
         </div>

      </div>
   );
};
