import * as React from "react"
import { Link } from "gatsby"




const Footer = () => (
  <footer className="relative mt-12 p-4 bg-gradient-to-t from-black/80 via-red-500/50 to-orange-300">
    <img className="absolute inset-0 w-full h-full -z-10 object-cover object-center" src="https://cdn.pixabay.com/photo/2017/01/18/21/49/singapore-1990959_960_720.jpg" />
    <div className="globalWrapper px-8 py-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-2xl font-serif text-white transition duration-300 "
          aria-label="logo"
        >
          <svg
            className="w-11 h-auto"
            width="207"
            height="208"
            viewBox="0 0 207 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_751_40"
              maskUnits="userSpaceOnUse"
              x="-0.269043"
              y="0.00244141"
              width="208"
              height="208"
              fill="black"
            >
              <rect
                fill="white"
                x="-0.269043"
                y="0.00244141"
                width="208"
                height="208"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M166.53 3.32598C151.525 -2.9687 133.967 3.96613 127.313 18.8154L111.746 53.5581L63.9271 26.0144C44.2878 14.702 18.7392 21.1801 6.86278 40.4835C-12.4453 71.866 16.8455 109.706 52.9427 100.013L96.1255 88.4176L68.3671 150.366C59.106 171.034 68.5289 194.892 89.4138 203.653C123.718 218.044 158.925 183.43 144.259 149.731L123.991 103.16C121.411 97.2318 120.897 91.0447 122.046 85.2613C136.279 88.3885 147.306 100.887 146.86 116.466L146.623 124.785C145.762 154.88 186.415 165.98 202.392 140.012C210.983 126.05 206.431 108.097 192.225 99.9146L133.916 66.3284C138.461 62.8556 144.046 60.5266 150.32 59.9162L156.928 59.2733C187.608 56.2885 194.671 15.1312 166.53 3.32598Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M166.53 3.32598C151.525 -2.9687 133.967 3.96613 127.313 18.8154L111.746 53.5581L63.9271 26.0144C44.2878 14.702 18.7392 21.1801 6.86278 40.4835C-12.4453 71.866 16.8455 109.706 52.9427 100.013L96.1255 88.4176L68.3671 150.366C59.106 171.034 68.5289 194.892 89.4138 203.653C123.718 218.044 158.925 183.43 144.259 149.731L123.991 103.16C121.411 97.2318 120.897 91.0447 122.046 85.2613C136.279 88.3885 147.306 100.887 146.86 116.466L146.623 124.785C145.762 154.88 186.415 165.98 202.392 140.012C210.983 126.05 206.431 108.097 192.225 99.9146L133.916 66.3284C138.461 62.8556 144.046 60.5266 150.32 59.9162L156.928 59.2733C187.608 56.2885 194.671 15.1312 166.53 3.32598Z"
              fill="url(#paint0_linear_751_40)"
            />
            <path
              d="M127.313 18.8154L127.131 18.7336L127.313 18.8154ZM166.53 3.32598L166.453 3.51041L166.53 3.32598ZM111.746 53.5581L111.646 53.7314L111.838 53.8419L111.928 53.6399L111.746 53.5581ZM63.9271 26.0144L63.8272 26.1877L63.9271 26.0144ZM6.86278 40.4835L7.03312 40.5883L6.86278 40.4835ZM52.9427 100.013L52.8909 99.8199L52.9427 100.013ZM96.1255 88.4176L96.308 88.4994L96.4801 88.1153L96.0736 88.2244L96.1255 88.4176ZM68.3671 150.366L68.5497 150.448L68.3671 150.366ZM89.4138 203.653L89.4912 203.468L89.4138 203.653ZM144.259 149.731L144.443 149.652L144.259 149.731ZM123.991 103.16L124.174 103.08L123.991 103.16ZM122.046 85.2613L122.089 85.0659L121.89 85.0221L121.85 85.2223L122.046 85.2613ZM146.86 116.466L146.66 116.46L146.86 116.466ZM146.623 124.785L146.423 124.779L146.623 124.785ZM202.392 140.012L202.562 140.117L202.392 140.012ZM192.225 99.9146L192.325 99.7413L192.225 99.9146ZM133.916 66.3284L133.795 66.1694L133.556 66.3518L133.816 66.5017L133.916 66.3284ZM150.32 59.9162L150.339 60.1153L150.32 59.9162ZM156.928 59.2733L156.948 59.4723L156.928 59.2733ZM127.496 18.8971C134.105 4.147 151.548 -2.74227 166.453 3.51041L166.607 3.14155C151.502 -3.19514 133.829 3.78525 127.131 18.7336L127.496 18.8971ZM111.928 53.6399L127.496 18.8971L127.131 18.7336L111.563 53.4763L111.928 53.6399ZM63.8272 26.1877L111.646 53.7314L111.845 53.3848L64.0269 25.8411L63.8272 26.1877ZM7.03312 40.5883C18.8528 21.377 44.2817 14.9293 63.8272 26.1877L64.0269 25.8411C44.2938 14.4747 18.6256 20.9831 6.69243 40.3787L7.03312 40.5883ZM52.8909 99.8199C16.9558 109.469 -12.1733 71.8057 7.03312 40.5883L6.69243 40.3787C-12.7172 71.9263 16.7351 109.943 52.9946 100.206L52.8909 99.8199ZM96.0736 88.2244L52.8909 99.8199L52.9946 100.206L96.1773 88.6108L96.0736 88.2244ZM68.5497 150.448L96.308 88.4994L95.943 88.3358L68.1846 150.284L68.5497 150.448ZM89.4912 203.468C68.7099 194.751 59.3344 171.013 68.5497 150.448L68.1846 150.284C58.8775 171.055 68.348 195.032 89.3365 203.837L89.4912 203.468ZM144.076 149.811C158.665 183.334 123.639 217.794 89.4912 203.468L89.3365 203.837C123.797 218.294 159.185 183.525 144.443 149.652L144.076 149.811ZM123.807 103.24L144.076 149.811L144.443 149.652L124.174 103.08L123.807 103.24ZM121.85 85.2223C120.693 91.0441 121.21 97.2728 123.807 103.24L124.174 103.08C121.611 97.1907 121.101 91.0452 122.243 85.3002L121.85 85.2223ZM147.06 116.472C147.508 100.789 136.407 88.212 122.089 85.0659L122.004 85.4566C136.15 88.565 147.103 100.985 146.66 116.46L147.06 116.472ZM146.823 124.79L147.06 116.472L146.66 116.46L146.423 124.779L146.823 124.79ZM202.222 139.908C194.286 152.806 180.225 156.5 168.246 153.229C156.268 149.958 146.395 139.731 146.823 124.79L146.423 124.779C145.99 139.933 156.013 150.303 168.141 153.615C180.267 156.926 194.521 153.186 202.562 140.117L202.222 139.908ZM192.125 100.088C206.233 108.214 210.753 126.041 202.222 139.908L202.562 140.117C211.212 126.058 206.628 107.98 192.325 99.7413L192.125 100.088ZM133.816 66.5017L192.125 100.088L192.325 99.7413L134.016 66.1551L133.816 66.5017ZM150.3 59.7172C143.988 60.3313 138.368 62.6746 133.795 66.1694L134.037 66.4873C138.554 63.0365 144.103 60.722 150.339 60.1153L150.3 59.7172ZM156.909 59.0742L150.3 59.7172L150.339 60.1153L156.948 59.4723L156.909 59.0742ZM166.453 3.51041C180.427 9.37271 185.659 22.5157 183.59 34.5735C181.52 46.6322 172.15 57.5915 156.909 59.0742L156.948 59.4723C172.386 57.9703 181.887 46.8585 183.984 34.6411C186.081 22.4228 180.774 9.0845 166.607 3.14155L166.453 3.51041Z"
              fill="black"
              mask="url(#path-1-outside-1_751_40)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_751_40"
                x1="207"
                y1="11"
                x2="17.4997"
                y2="103.999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFB800" />
                <stop offset="0.5224" stop-color="#F6DAAF" />
                <stop offset="1" stop-color="#FF932F" />
              </linearGradient>
            </defs>
          </svg>
          Seovileo
        </Link>
        <div className="flex items-center justify-end w-full flex-col sm:flex-row">
          <div className="flex items-center justify-center flex-col px-4">
            <p className="font-bold mb-2 text-lg md:text-xl mt-12 md:mt-0 text-amber-200">
              Kontakt
            </p>
            <a href="tel:+48570037077" className="text-white hover:underline font-medium">
              Tel: +48 570-037-077
            </a>
            <a href="mailto:seovileo@gmail.com" className="text-white hover:underline font-medium">
              Mail: Seovileo@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center flex-col  px-4">
            <p className="font-bold mb-2 text-lg md:text-xl mt-12 md:mt-0 text-amber-200">
              Informacje
            </p>
            <a href="/regulamin" className="text-white hover:underline font-medium">
              Regulamin
            </a>
            <a href="/regulamin" className="text-white hover:underline font-medium">
              Polityka Prywatności
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8 pt-6 border-t-[1px] border-white font-coming">
        <Link className=" text-white" to="/">
          © 2023 &middot; Seovileo,
          {` `}
          Inc.
        </Link>
        <div className="flex items-center">
          <Link to="/" className="px-1 mx-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto fill-white ionicon" viewBox="0 0 512 512"><title>Logo Facebook</title><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"/></svg></Link>
          <Link to="/" className="px-1 mx-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto fill-white ionicon" viewBox="0 0 512 512"><title>Logo Github</title><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg></Link>
          <Link to="/" className="px-1 mx-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto fill-white ionicon" viewBox="0 0 512 512"><title>Logo Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg></Link>
          <Link to="/" className="px-1 mx-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto fill-red-600 ionicon" viewBox="0 0 512 512"><title>Logo Youtube</title><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"/></svg></Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
