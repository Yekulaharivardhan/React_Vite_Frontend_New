import React from 'react';

const Sidebar = () => {

    const iconsList = [
        {icon: <i className="fa-solid fa-user"></i>,  description:"User"  },
        {icon: <i className="fa-solid fa-cloud"></i>,  description:"Global"  },
        {icon: <i className="fa-brands fa-slack"></i>,  description:"Social"  },
        {icon: <i className="fa-brands fa-figma"></i>,  description:"Design"  },
        {icon: <i className="fa-solid fa-list"></i>,  description:"Activities"  },
        {icon: <i className="fa-solid fa-snowflake"></i>,  description:"Whether"  },
        {icon: <i className="fa-solid fa-palette"></i>,  description:"Art"  },
        {icon: <i className="fa-solid fa-pen"></i>,  description:"Customize"  },
        {icon: <i className="fa-solid fa-calendar-days"></i>,  description:"Schedules"  },
    ]


    return (
        <div className='position-fixed top-50 start-0 z-index sidebar_main'>
            <button className="side_bar_button border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">

                {">"}</button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
               
{iconsList.map(i =>{
    return(
        <ul className='ps-2'>
        <li className='row fs-5 gap-2 d-flex flex-row'>
        <span className='col-1 d-flex align-items-center icon_style' >{i.icon}</span>
        <span className='col d-flex align-items-center sidebar_text_style'>{i.description}</span>
            
        </li>  </ul>
    )
})}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;