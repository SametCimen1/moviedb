"use client";
import Image from 'next/image'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCarousel from './MovieCarousel';
import ShowsCarousel from './ShowsCarousel';
import Head from 'next/head';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";


export default function Home() {

  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false)

  const optionsMovie = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzg1MzUxYzE4YjczZDA0MWY4YTk5ZjNlNWNjNWQ2NCIsInN1YiI6IjY0OTVjMGUzYTI4NGViMDBjNWJkNzIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VXjB8BzPwujsB7WFLURSz_G9QKFA1vFGCiobExBl9aI'
    }
  };




  useEffect(() => {
    getMovies();
    getShows();
    getRandomMovie();
  },[])


  const getMovies = async() => {
      await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', optionsMovie)
      .then(response => response.json())
      .then(response =>  setMovies(response.results.slice(0,10)))
      .catch(err => console.error(err));

  }
  const getShows = async() => {
    await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', optionsMovie)
    .then(response => response.json())
    .then(response =>  setShows(response.results.slice(0,10)))
    .catch(err => console.error(err));
  }
  
  const getRandomMovie = async() => {
    let number = Math.floor((Math.random() * 10000))
    const data = await fetch(`https://api.themoviedb.org/3/movie/${number}?language=en-US`, optionsMovie)
    const response = await data.json();
    console.log('res', response)
    if(response.success === false){
        getRandomMovie()
    }
    setRandomMovie(response)
    
  }


  const getSearch = async() => {    
    await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`, optionsMovie)
    .then(response => response.json())
    .then(response => setSearchMovie(response.results))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    console.log(searchMovie)
  }, [searchMovie])


  return (
    <div>
      <Head><title>MovieDB</title></Head>
                        <nav class="bg-white   border-gray-200 dark:bg-gray-900 w-full bg-blue-500">
                        <div className="w-4/5 flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MovieDB</span>
                        </a>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <div className='flex'>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."  onChange={(e)=>setSearchInput(e.target.value)}/>
                        <button className='ml-2 rounded-lg border-2 text-white py-2 px-4 cursor-pointer hover:bg-white hover:text-black' onClick={() => {getSearch(); setSearchClicked(true)}}>Search</button>
                    </div>
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
   
            </div>
            </nav>
    





  


      <section className='w-4/5  mx-auto mt-10'>

        
        <div>
            {searchClicked && 
              <div>
                <h2 className='font-bold inline text-2xl'>Found These:</h2>
                <button className='inline text-white ml-4 border-2 p-2 rounded px-4 ' onClick = {() => {setSearchMovie([]); setSearchClicked(false)}}>Reset</button>
              </div>
            }
            <div className='flex flex-wrap justify-start'>
                {searchMovie.map((movie, index) => {
                      if(movie.poster_path !== null){
                        console.log('movie', movie)
                        return(
                          <a className='flex  w-1/6 items-center mt-4 flex-col hover:opacity-70'key={index} href = {`https://www.google.com/search?q=${movie.original_title}`}>
                                <div className='flex relative mt-2 mx-2  h-full items-stretch cursor-pointer'>
                                            <img src= {movie.poster_path !== undefined && "http://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie poster image" className=" w-full bg-black h-full " />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{movie.original_title}</h3>
                                                </div>
                                            </div>
                         
                                </div>
                          </a>
                        )
                      }
                  
                })}
            </div>
            </div>
        

      
        <h2 className='font-bold text-2xl mt-2'>Top Movies</h2>
         


        <div>
        <MovieCarousel movies = {movies}></MovieCarousel>

        
        <section className='my-5'>
          <h2 className='font-bold text-2xl'>Top Shows</h2>
        <ShowsCarousel shows = {shows}></ShowsCarousel>
        
        </section>




        <section className='mb-2'>
            <div className=''>
                <h2 className='font-bold text-2xl inline'>Don&apos;t know what to watch? Get a random movie!</h2>
    
            </div>
            <div className='flex items-center flex-col'>
                <div className='flex w-1/4 relative mt-2   h-full items-stretch cursor-pointer'>
                            <img src= {randomMovie !== undefined && "http://image.tmdb.org/t/p/w500/" + randomMovie.poster_path} alt="Movie poster image" className=" w-full bg-black h-full " />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <div className="flex h-full items-end pb-6">
                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{randomMovie.original_title}</h3>
                                </div>
                            </div>
        
                </div>
                <button className='p-2 mt-2 w-1/4  border-2rounded bg-gray-700 text-white rounded cursor-pointer' onClick={() =>getRandomMovie()}>Get another one!</button>
            </div>

        </section>

        <section className='w-full'>
            <h2 className='font-bold text-2xl'>Top Actors</h2>
            <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={5} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 bg-black p-3 py-4 opacity-50 left-0 ml-4 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">


    
                                                        <Slide index = {0}>
                                                          <div className='flex flex-col relative w-full sm:w-auto h-full items-stretch cursor-pointer'>
                                                            <a href = "https://www.imdb.com/name/nm0331516/?ref_=nm_mv_close">
                                                                <img src="https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_FMjpg_UY2048_.jpg" alt="Movie poster image" className=" w-full bg-black h-full h-200 object-fit" />
                                                                <div className="bg-opacity-30 w-full h-full ">
                                                                <p className='p-1 px-0'>Ryan Gosling</p>
                                                                </div>
                                                            </a>
                                                          </div>
                                                        </Slide>


                                                        <Slide index = {1}>
                                                          <div className='flex flex-col relative w-full sm:w-auto h-full items-stretch cursor-pointer'>
                                                            <a href = "https://www.imdb.com/name/nm0000288/?ref_=nm_mv_close">
                                                                <img src="https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_FMjpg_UY2048_.jpg" alt="Movie poster image" className=" w-full bg-black h-full h-200 object-cover" />
                                                                <div className="bg-opacity-30 w-full h-full ">
                                                                <p className='p-1 px-0'>Christian Bale</p>
                                                                </div>
                                                            </a>
                                                          </div>
                                                        </Slide>


                                                        <Slide index = {2}>
                                                          <div className='flex flex-col relative w-full sm:w-auto h-full items-stretch cursor-pointer'>
                                                            <a href = "https://www.imdb.com/name/nm0000158/">
                                                                <img src="https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UY2048_.jpg" alt="Movie poster image" className=" w-full bg-black h-full h-200 object-cover" />
                                                                <div className="bg-opacity-30 w-full h-full ">
                                                                <p className='p-1 px-0'>Tom Hanks</p>
                                                                </div>
                                                            </a>
                                                          </div>
                                                        </Slide>

                                                        <Slide index = {3}>
                                                          <div className='flex flex-col relative w-full sm:w-auto h-full items-stretch cursor-pointer'>
                                                            <a href = "https://www.imdb.com/name/nm1083271/">
                                                                <img src="https://m.media-amazon.com/images/M/MV5BMTc5MjgyMzk4NF5BMl5BanBnXkFtZTcwODk2OTM4Mg@@._V1_FMjpg_UX280_.jpg" alt="Movie poster image" className=" w-full bg-black h-full h-200 object-cover" />
                                                                <div className="bg-opacity-30 w-full h-full ">
                                                                <p className='p-1 px-0'>Megan Fox</p>
                                                                </div>
                                                            </a>
                                                          </div>
                                                        </Slide>


                                                        <Slide index = {4}>
                                                          <div className='flex flex-col relative w-full sm:w-auto h-full items-stretch cursor-pointer'>
                                                            <a href = "https://www.imdb.com/name/nm0424060/?ref_=nm_mv_close">
                                                                <img src="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UY2048_.jpg" alt="Movie poster image" className=" w-full bg-black h-full h-200 object-cover" />
                                                                <div className="bg-opacity-30 w-full h-full ">
                                                                <p className='p-1 px-0'>Scarlett Johansson</p>
                                                                </div>
                                                            </a>
                                                          </div>
                                                        </Slide>

                                                        <Slide index = {5}>
                                                          <div className='flex flex-col relative w-full sm:w-auto h-full items-stretch cursor-pointer'>
                                                            <a href = "https://www.imdb.com/name/nm0000138/">
                                                                <img src="https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX297_.jpg" alt="Movie poster image" className=" w-full bg-black h-full h-200 object-cover" />
                                                                <div className="bg-opacity-30 w-full h-full ">
                                                                <p className='p-1 px-0'>Leonardo DiCaprio</p>
                                                                </div>
                                                            </a>
                                                          </div>
                                                        </Slide>

                                                        

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
        </section>
       
        
        </div>
      </section>
    </div>
  )
}
