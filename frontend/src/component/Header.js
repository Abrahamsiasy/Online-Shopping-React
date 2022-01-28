import React from 'react';

const Header = () => {

    let leftLinks =
        [
            {
                name: "Today's Deal",
                link: "/today",
                icon: "lg:text-gray-300 text-gray-500 text-lg leading-lg mr-2 fas fa-calendar-week"
            },
            {
                name: "New Arivals",
                link: "/new",
                icon: "lg:text-gray-300 text-gray-500 text-lg leading-lg mr-2 fas fa-plane-arrival"
            }

        ]

    let sochials =
        [
            {
                name: "facebook",
                link: "/facebook",
                icon: "lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "
            },
            {
                name: "twitter",
                link: "/new",
                icon: "lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "
            },
            {
                name: "telegram",
                link: "/about",
                icon: "lg:text-gray-300 text-gray-500 fab fa-telegram text-lg leading-lg "
            },
            {
                name: "instagram",
                link: "/team",
                icon: "lg:text-gray-300 text-gray-500 fab fa-instagram text-lg leading-lg "
            },


        ]

        const [open, setOpen] = React.useState(true)
    return (
        <div className="bg-gray-800 h-16">
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a href=""

                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white ml-2">
                            <i className="lg:text-gray-300 text-gray-500 fas fa-home text-lg leading-lg mr-2"></i>
                            Home
                        </a>
                        
                        
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border-solid border-transparent rounded bg-transparent block lg:hidden lg:outline-none focus:outline-none uppercase"
                            type="button" onClick="toggleNavBar('collaps-nav-bar')"
                            onClick={ () => setOpen(!open)}>
                            {open ? <i className="text-white fas fa-bars"></i> : <i className="text-white fas fa-times-circle"></i> }

                        </button>


                        

                    </div>
                    <div className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow hidden"
                        id="collaps-nav-bar">
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            {
                                leftLinks.map((leftLink) => (
                                    <li className="flex items-center">
                                        <a href={leftLink.link}
                                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                            {<i className={leftLink.icon}></i>}
                                            {leftLink.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>

                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
                        <button
                            className="cursor-pointer text-xl text-red-500 leading-none px-3 py-1 border-solid border-transparent rounded-full bg-transparent block focus:outline-none uppercase"
                            type="button" onClick="toggleNavBar('collaps-nav-bar')" >
                            <i className="text-white fas fa-cart-plus"></i>  12

                        </button>
                            {
                                sochials.map((sochial) => (
                                    <li className="flex items-center ">
                                        <a href={sochial.name}
                                            className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase ">
                                            <i className={sochial.icon}></i>
                                            <span className="lg:hidden inline-block ml-2"></span>
                                        </a>
                                    </li>
                                ))
                            }
                            <li className="flex items-center ">
                                <button
                                    className="bg-white text-gray-800 active:bg-gray-200 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                                    type="button">
                                    <i className="fas fa-arrow-circle-down mr-2"></i>
                                    Buy your favorite itmes</button>
                            </li>

                        </ul>
                    </div>
                    
                </div>


            </nav>

        </div>
    )
};

export default Header;
