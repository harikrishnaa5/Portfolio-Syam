import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import SocialMedia from "../SocialMedia";
import { connectMe } from "../../constants";

const Contact = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all 
              data-closed:translate-y-4 data-closed:opacity-0 
              data-enter:duration-300 data-enter:ease-out 
              data-leave:duration-200 data-leave:ease-in 
              w-[95%] sm:w-full sm:max-w-lg 
              data-closed:sm:translate-y-0 data-closed:sm:scale-95 p-6"
          >
            <div className="flex px-4 sm:p-6 sm:pb-4 flex-col gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-shadow-lg">
                Contact
              </h1>

              {/* ROW CONTAINER */}
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {Object.entries(connectMe).map(([key, value]) => {
                  const lowerKey = key.toLowerCase();

                  return (
                    <div key={key}>
                      {lowerKey === "email" ? (
                        <a href={`mailto:${value.name}`}>
                          <img
                            src={value.icon}
                            alt="email"
                            className="w-8 h-8"
                          />
                        </a>
                      ) : lowerKey === "phone" ? (
                        <a
                          href={`https://wa.me/91${value.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={value.icon}
                            alt="phone"
                            className="w-6 h-6"
                          />
                        </a>
                      ) : (
                        <span>{value}</span>
                      )}
                    </div>
                  );
                })}
                <SocialMedia />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Contact;
