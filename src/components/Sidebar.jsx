import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const iconsList = [
        {icon: <i className="fa-solid fa-user"></i>, url:"users",  description:"User"  },
        {icon: <i className="fa-solid fa-cloud"></i>, url:"global",  description:"Global"  },
        {icon: <i className="fa-brands fa-slack"></i>, url:"/social",  description:"Social"  },
        {icon: <i className="fa-brands fa-figma"></i>, url:"/design",  description:"Design"  },
        {icon: <i className="fa-solid fa-list"></i>, url:"/activities",  description:"Activities"  },
        {icon: <i className="fa-solid fa-snowflake"></i>, url:"/weather",  description:"weather"  },
        {icon: <i className="fa-solid fa-palette"></i>, url:"/art",  description:"Art"  },
        {icon: <i className="fa-solid fa-pen"></i>, url:"/customize",  description:"Customize"  },
        {icon: <i className="fa-solid fa-calendar-days"></i>, url:"/schedules",  description:"Schedules"  },
    ]


    return (
        <div className='position-fixed start-0 top-0 z-3 sidebar_main'>
            <button className="side_bar_button border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">

            <i class="fa-solid fa-bars"></i></button>

            <div className="offcanvas offcanvas-start " data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><img className='w-50 rounded h-auto' src="./images/mylogo.png" alt="" /> </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
               
{iconsList.map(i =>{
    return(
        <ul className='ps-2'>
        <NavLink to={i.url} className='text-decoration-none text-dark'>
        <li className='row fs-5 gap-2 d-flex flex-row'>
        <span className='col-1 d-flex align-items-center icon_style' >{i.icon}</span>
        <span className='col d-flex align-items-center sidebar_text_style'>{i.description}</span>
        </li>  
        </NavLink>
        </ul>
    )
})}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;