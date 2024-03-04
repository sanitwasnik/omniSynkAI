"use client"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className='w-full flex justify-center items-center flex-col  '>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <Image className=' object-contain p-2' src="/images/OmniSynkAILogo.png" alt='logo' width={200} height={200} />
          <div className="hidden md:flex ">
            <button
              type='button'
              onClick={() => window.open('https://github.com/sanitwasnik')}
              className='black_btn m-1'>
              Home

            </button>
            <button
              type='button'
              onClick={() => window.open('https://www.omnisynkai.com/mission')}
              className='black_btn'>
              Mission

            </button>
            <button
              type='button'
              onClick={() => window.open('https://www.omnisynkai.com/team')}
              className='black_btn'>
              Team

            </button>
            <button
              type='button'
              onClick={() => window.open('https://www.omnisynkai.com/grow-with-us')}
              className='black_btn'>
              Career

            </button>
            <button
              type='button'
              onClick={() => window.open('hhttps://www.omnisynkai.com/contact')}
              className='black_btn'>
              Contact

            </button>
          </div>

        </nav>
        <h1 className='head_text'>Managing your orders  <br className='max-md:hidden' />
          has never been easier
        </h1>
        <h2 className='desc'>
          With
          <span className='orange_gradient font-bold'> OmniSynkAI</span>,
          you can drive efficiency at scale while
          actively receiving insights on growing your business.
        </h2>
        <div className=" items-center w-max">
          <Image src="/images/peepsrunning.png" alt="" width={1000} height={1000} />
        </div>
      </header>
      <div className=" w-full flex justify-center items-center flex-col px-8 py-14">
        <h1 className='head_text'>Made for Everyone  <br className='max-md:hidden' />
        </h1>
        <h2 className='desc'>
          With
          <span className='orange_gradient font-bold'> OmniSynkAI</span>,
          we offer tools for businesses at any size.   <br className='max-md:hidden' />
          Business growth doesn`t stop at listing.</h2>

        <button className="black_btn m-3">Request Demo</button>
      </div>

      <div className=" grid md:flex justify-between items-center w-full mb-10 px-8  py-8">
        <div className="">
          <h1 className='text-3xl font-medium'>Increase efficiency and revenue while cutting  <br className='max-md:hidden' />
            costs on the fulfillment process.</h1>
          <h2 className='desc'>
            Our platform is a first of it’s kind tool
            that allows sellers to use AI driven product
            to help them navigate sales, insights,
            cross-list and manage orders in one spot.</h2>
        </div>
        <div className="">
          <Image src="/images/unboxing.png" alt="" width={400} height={400} />
        </div>

      </div>
      <div className="w-full flex justify-center items-center flex-col px-8 py-8 divide-slate-400">

        <Image src="/images/SectionCompanies.png" alt="" width={800} height={800} />
      </div>


      <div className="w-full flex justify-center items-center flex-col text-center">
        <div>
          <Image src="/images/HeyOmni.png" alt="" width={600} height={600} />

        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <h1 className='text-3xl font-medium'>Automate your business in a few steps  <br className='max-md:hidden' />
          </h1>
          <h2 className='desc'>Prioritize what truly counts and
            leave the repetitive tasks to us.</h2>
        </div>
      </div>

      <div className=" grid md:flex justify-between items-center w-full mb-10 px-8  py-8">
        <div className="mt-20 flex flex-wrap">
          <Image src="/images/Group.png" alt="" width={500} height={500} />
        </div>
        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <h1 className='text-3xl font-medium'>What we do best  <br className='max-md:hidden' />
          </h1>
          <h2 className="desc">Our platform streamlines order management for sellers of all sizes
            by syncing tracking numbers, alerting to potential delays, and simplifying cross-listing.
            Unlike other systems, we offer affordable, user-friendly solutions with 24/7 support,
            making business growth less intimidating.

          </h2>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col py-6">
        <h1 className='head_text'>How it works  <br className='max-md:hidden' />

        </h1>
        <h2 className='desc'>
          Our platform is meant to be simple and customized to fit your shop’s needs, no matter how big or small.
        </h2>
        <div className=" items-center">
          <Image src="/images/how.png" alt="" width={1000} height={1000} />
        </div>
      </div>

      <div className=" grid md:flex justify-between items-center w-full mb-10 px-14  py-8 drop-shadow-2xl">
        <div className="mt-20 flex flex-wrap">
          <Image src="/images/peeps.png" alt="" width={500} height={500} />
        </div>
        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <h1 className='text-3xl font-medium'>Built by sellers, for sellers  <br className='max-md:hidden' />
          </h1>
          <h2 className="desc">Boost user satisfaction and streamline happiness. <br className='max-md:hidden' />
            Designed for anyone - it’s simple.
          </h2>
        </div>
      </div>


      <div className=" grid md:flex justify-between items-center w-full mb-10 px-8  py-8">
        <div className="">
          <h1 className='text-3xl font-medium'>Who we are <br className='max-md:hidden' />
          </h1>
          <h2 className=' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            We`re a team of designers, researchers, and engineers -
            with a shared vision to enhance efficiency, drive sales,
            and make a meaningful impact on the lives of e-commerce
            sellers nationwide.</h2>

          <button className=" shadow-sm shadow-cyan-500/50 p-4  rounded-full hover:shadow-amber-500/50">Meet the team</button>
        </div>
        <div className="">
          <Image src="/images/composition.png" alt="" width={500} height={500} />
        </div>
      </div>

      <div className="bg-blue-600 w-full flex justify-center items-center flex-col px-10 py-14">
        <h1 className='head_text2 pb-6'>Discover a better way to manage orders.  <br className='max-md:hidden' />
        </h1>

        <button className="black_btn m-3 pt-6">Visit us on indiegogo</button>
      </div>
      <div className="bg-blue-950 ">
        <div className="flex justify-between px-12 py-14  items-center ">
          <div>
            <Image src="/images/OmniSynkAILogo.png" alt='logo' width={200} height={200} />
          </div>
          <div className="">
            <ul className="list-none text-white ">
              <li className="pb-1 hover:text-gray-600">Company</li>
              <li className="pb-1 hover:text-gray-600">About</li>
              <li className="pb-1 hover:text-gray-600">Our Team</li>
              <li className="pb-1 hover:text-gray-600">Investors</li>
              <li className="pb-1 hover:text-gray-600">Career-we`re hiring</li>
              <li className="pb-1 hover:text-gray-600">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <h2 className="text-white text-center py-10">Omni = Everywhere | Built with 💜 in Baltimore.</h2>

      </div>
    </>
  );
}
