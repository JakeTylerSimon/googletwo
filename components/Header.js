import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import { Avatar } from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
            <Image
                src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
                height={40}
                width={120}
                className='cursor-pointer'
                onClick={() => router.push('/')} 
                />

            <form className='flex px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl flex-grow items-center'>
                <input className='flex-grow w-full focus:outline-none' type="text" ref={searchInputRef} />
                <XIcon 
                    className='h-7 sm:mr-3  text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' 
                    onClick={() => (searchInputRef.current.value = '')}
                    />
                <MicrophoneIcon
                    className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
                    />
                <SearchIcon 
                    className='h-6 text-blue-500 hidden sm:inline-flex'
                    />
                <button hidden type='submit' onClick={search}>Seach</button>
            </form>

            <Avatar 
                url='https://media-exp1.licdn.com/dms/image/C5603AQEwZVSJVRq2oA/profile-displayphoto-shrink_200_200/0/1554414119975?e=1651104000&v=beta&t=6A-dTuao6xYOaHaNn3gOLTnVx4gnPaCEX8r0cVeBFFs'
                className='ml-auto'
            />
        </div>

        <HeaderOptions />
    </header>
  )
}

export default Header