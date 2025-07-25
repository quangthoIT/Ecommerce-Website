import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
  return (
    <div className="lg:container bg-white mx-auto shadow-md p-7 rounded-2xl">
      <div className="grid grid-cols-4">
        <div className="delivery-wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Percent size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2">
                Discount
              </h4>
              <p className="text-sm text-[#9a9caa] capitalize font-inter font-normal">
                Every week new sales
              </p>
            </div>
          </div>
        </div>

        <div className="delivery-wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Truck size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2">
                Free Delivery
              </h4>
              <p className="text-sm text-[#9a9caa] capitalize font-inter font-normal">
                100% free for all orders
              </p>
            </div>
          </div>
        </div>

        <div className="delivery-wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Clock3 size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2">
                Support 24/7
              </h4>
              <p className="text-sm text-[#9a9caa] capitalize font-inter font-normal">
                we care your experience
              </p>
            </div>
          </div>
        </div>

        <div className="delivery-wrapper">
          <div className="flex items-center gap-4">
            <p>
              <ShieldCheck size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2">
                Secure Payment
              </h4>
              <p className="text-sm text-[#9a9caa] capitalize font-inter font-normal">
                100% secure payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
