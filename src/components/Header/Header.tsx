import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { X, Menu, Dices, FileQuestion, Github } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import LogoIcon from "../LogoIcon/LogoIcon";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { routes } from "@/routes";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="https://oseledets.ru" className="-m-1.5 p-1.5">
            <span className="sr-only">eo-gh-pages</span>

            <LogoIcon />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {routes.map((route) => (
            <div key={route}>
              <Button variant={"link"}>
                <Link to={route}>
                  <div className="flex align-center justify-center">
                    {route === "/homework1" ? (
                      <>
                        <Dices size={20} className="mr-2" />
                        Dice game
                      </>
                    ) : (
                      <>
                        <FileQuestion size={20} className="mr-2" /> Undefined
                      </>
                    )}
                  </div>
                </Link>
              </Button>
            </div>
          ))}

          <Button variant={"link"}>
            <Link to="https://github.com/ojenya">
              <div className="flex align-center justify-center">
                <Github size={20} className="mr-2" />
                My Github
              </div>
            </Link>
          </Button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="https://oseledets.ru" className="-m-1.5 p-1.5">
              <span className="sr-only">eo-gh-pages</span>

              <LogoIcon />
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3"></Disclosure>
                {routes.map((route) => (
                  <div key={route}>
                    <Button variant={"link"}>
                      <Link to={route}>
                        <div className="flex items-center -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {route === "/homework1" ? (
                            <>
                              <Dices size={20} className="mr-2" />
                              Dice game
                            </>
                          ) : (
                            <>
                              <FileQuestion size={20} className="mr-2" />{" "}
                              Undefined
                            </>
                          )}
                        </div>
                      </Link>
                    </Button>
                  </div>
                ))}
                <Button variant={"link"}>
                  <Link to="https://github.com/ojenya">
                    <div className="flex align-center justify-center">
                      <Github size={20} className="mr-2" />
                      My Github
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
