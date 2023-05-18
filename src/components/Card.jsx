import React from 'react'

function Card() {
  return (
    <div>
        <section className="bg-black2 w-max mx-auto px-3 py-5 space-y-5">
            <div className="flex justify-center">
                <h2 className="px-12 font-bold">Trending songs</h2>
            </div>
            <div className="space-y-5">
                <div className="flex justify-center">
                    <button className="bg-white2 px-2.5 py-1 rounded-md shadow-md">
                        Unavailable by <span className="italic">Davido</span>
                        <i className="fa-solid fa-plus text-xs font-bold px-2"></i>
                    </button>
                </div>
                <div className="flex justify-center">
                <button className="bg-white2 px-2.5 py-1 rounded-md shadow-md">
                        Unavailable by <span className="italic">Davido</span>
                        <i className="fa-solid fa-plus text-xs font-bold px-2"></i>
                    </button>
                </div>
                <div className="flex justify-center">
                <button className="bg-white2 px-2.5 py-1 rounded-md shadow-md">
                        Unavailable by <span className="italic">Davido</span>
                        <i className="fa-solid fa-plus text-xs font-bold px-2"></i>
                    </button>
                </div>
                <div className="flex justify-center">
                <button className="bg-white2 px-2.5 py-1 rounded-md shadow-md">
                        Unavailable by <span className="italic">Davido</span>
                        <i className="fa-solid fa-plus text-xs font-bold px-2"></i>
                    </button>
                </div>
                <div className="flex justify-center">
                <button className="bg-white2 px-2.5 py-1 rounded-md shadow-md">
                        Unavailable by <span className="italic">Davido</span>
                        <i className="fa-solid fa-plus text-xs font-bold px-2"></i>
                    </button>
                </div>
                <div className='flex justify-center'>
                    <button className="bg-yellow2 px-2 py-1 rounded-md text-sm shadow-md">View more</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Card