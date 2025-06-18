import { useLocation, Outlet } from "react-router-dom";
import {
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  MegaMenu,
  MegaMenuDropdown,
} from "flowbite-react";


const Layout = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path)

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <MegaMenu>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/home" active={isActive("/home")}>
            Home
          </NavbarLink>
          <NavbarLink active={isActive("/projects")}>
            <MegaMenuDropdown toggle={<>Projects</>}>
              <ul className="grid grid-cols-2">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="/projects/IPPPing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      IPPPing
                    </a>
                  </li>
                  <li>
                    <a href="/projects/portfolio" className="hover:text-primary-600 dark:hover:text-primary-500">
                      portfolio-site
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenuDropdown>
          </NavbarLink>
        </NavbarCollapse>
      </MegaMenu>
      <Outlet />
    </div>
    </>
  )
};

export default Layout;
