import React from 'react';

const ContactForm = () => {
    return (
        <div className="relative bg-contact w-full h-auto bg-cover bg-center">
            <div className="absolute opacity-60 z-20 inset-0 bg-cont"></div>
            <div className="relative z-30 flex items-center justify-center h-full flex-col py-8 px-4 sm:p-12">
                <div className="bg-white bg-opacity-90 max-w-md w-full">
                    <h2 className="text-5xl font-medium text-center mb-4">Get In Touch</h2>
                    <span className=' block mx-auto m-10 w-24 h-0.5 bg-span'></span>
                    <div className='w-full flex items-center justify-center'>
                        <p className="text-center mb-8 w-4/5 text-xl sm:w-auto">Have a sweet project in mind or just want to say hi? Feel free to send me a message!</p>
                    </div>
                </div>
                <form className='w-full sm:w-5/12 mx-auto my-5'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 roboto-regular" htmlFor="name">NAME</label>
                        <input className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl " id="name" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 roboto-regular" htmlFor="email">EMAIL</label>
                        <input className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 roboto-regular" htmlFor="subject">SUBJECT</label>
                        <input className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 roboto-regular" htmlFor="message">MESSAGE</label>
                        <textarea className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="2"></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="btn text-btn py-2 px-5 border-2 text-contact border-btn rounded transition-transform duration-400 ease-custom opacity-80 hover:scale-110 hover:opacity-100" type="button">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
