import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";



export default function ShowsCarousel({shows}){
    return(
    <div>
         <CarouselProvider className="xl:block lg:hidden hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 bg-black p-3 py-4 opacity-50 left-0 ml-4 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">



                                {shows.map((movie, index) => {

                                    return(
                                    <Slide index = {index} key = {index}>
                                        <div className='flex  relative w-full sm:w-auto  h-full items-stretch cursor-pointer'>
                                        <img src= {movie.primaryImage !== null && "http://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="black chair and white table" className=" w-full bg-black h-full h-200" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base  lg:leading-5 text-white">{index+1}</h2>
                                            <div className="flex h-full items-end pb-6 ">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{movie.original_name}</h3>
                                            </div>
                                        </div>
                                        </div>
                                    </Slide>
                                    )
                                    })}
                              </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-4 bg-black p-3 py-4 opacity-50 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>





                <CarouselProvider className="xl:hidden hidden lg:block md:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={2} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 bg-black p-3 py-4 opacity-50 left-0 ml-4 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">


                            {shows.map((movie, index) => {

                                return(
                                <Slide index = {index} key={index}>
                                    <div className='flex  relative w-full sm:w-auto  h-full items-stretch cursor-pointer'>
                                    <img src= {movie.primaryImage !== null && "http://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="black chair and white table" className=" w-full bg-black h-full h-200" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                        <h2 className="lg:text-xl leading-4 text-base  lg:leading-5 text-white">{index+1}</h2>
                                        <div className="flex h-full items-end pb-6 ">
                                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{movie.original_name}</h3>
                                        </div>
                                    </div>
                                    </div>
                                </Slide>
                                )
                                })}
                              </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-4 bg-black p-3 py-4 opacity-50 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>






                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7} visibleSlides={1} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 bg-black p-3 py-4 opacity-50 left-0 ml-4 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">


                            {shows.map((movie, index) => {

return(
<Slide index = {index} key={index}>
    <div className='flex  relative w-full sm:w-auto  h-full items-stretch cursor-pointer'>
    <img src= {movie.primaryImage !== null && "http://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="black chair and white table" className=" w-full bg-black h-full h-200" />
    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
        <h2 className="lg:text-xl leading-4 text-base  lg:leading-5 text-white">{index+1}</h2>
        <div className="flex h-full items-end pb-6 ">
            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{movie.original_name}</h3>
        </div>
    </div>
    </div>
</Slide>
)
})}

                              </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-4 bg-black p-3 py-4 opacity-50 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>


    </div>
)
}