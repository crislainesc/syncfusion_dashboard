import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { SiShopware } from 'react-icons/si'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider'

import { links } from '../../data/dummy'

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  const activeStyle =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-blue-300 text-white text-md m-2'
  const notActiveStyle =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2'

  return (
    <div className="ml-3 h-screen overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            <>
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={() => {}}
                      className={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                      }>
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </>
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
