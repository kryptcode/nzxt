

const PCTier = () => {
  return (
    <div className='pt-16 pb-10 w-[92%] md:w-[80%] mx-auto '>
        <div className='flex flex-col items-center space-y-3 pb-12 text-center'>
            <h2 className='text-5xl font-bold text-[#1c1d1f] '>
                Shop Gaming PCs
            </h2>
            <h6 className='text-slate-700 font-semibold text-lg'>
                Curated PCs designed for your needs.
            </h6>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-center text-white space-y-5 md:space-y-0 md:space-x-5 ">
            <div className=' flex flex-col justify-between items-center flex-1 h-[85vh] gaming-gradient rounded-lg'>
              <div className="px-7 pt-8">
                <h2 className="text-3xl font-bold mb-2">Starter PC</h2>
                <p className="text-lg font-medium mb-6">
                  Built for competitive gaming with rooms for upgrade. 
                </p>
                <button className="border-[2px] border-white text-lg font-medium py-1.5 px-5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105">
                  Shop Starter PCs
                </button>
              </div>

              <div className="w-full">
                <img src="https://nzxt.com/assets/cms/34299/1671571950-starter-pc-h510-base-primary.png?auto=format&fit=max&h=900&w=672" className="w-full" alt="" />
              </div>
            </div>

            <div className=' flex flex-col justify-between items-center flex-1 h-[85vh] streaming-gradient rounded-lg'>
              <div className="px-7 pt-8">
                <h2 className="text-3xl font-bold mb-2">Streaming PC</h2>
                <p className="text-lg font-medium mb-6">
                  Built for simultaneous streaming and gaming. 
                </p>
                <button className="border-[2px] border-white text-lg font-medium py-1.5 px-5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105">
                  Shop Streaming PCs
                </button>
              </div>

              <div className="w-full">
                <img src="https://nzxt.com/assets/cms/34299/1671572022-streaming-pc-h510-base-primary.png?auto=format&fit=max&h=900&w=672" className="w-full" alt="" />
              </div>
            </div>

            <div className=' flex flex-col justify-between items-center flex-1 h-[85vh] creator-gradient rounded-lg'>
              <div className="px-7 pt-8">
                <h2 className="text-3xl font-bold mb-2">Creator PC</h2>
                <p className="text-lg font-medium mb-6">
                  Built for professional content creation. 
                </p>
                <button className="border-[2px] border-white text-lg font-medium py-1.5 px-5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105">
                  Shop Creator PCs
                </button>
              </div>

              <div className="w-full">
                <img src="https://nzxt.com/assets/cms/34299/1671572130-creator-pc-primary.png?auto=format&fit=max&h=900&w=672" className="w-full" alt="" />
              </div>
            </div>

            

        </div>
    </div>
  )
}

export default PCTier