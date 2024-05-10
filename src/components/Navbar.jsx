import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div className='bg-white flex'>
            <img className='w-[111.54px] h-[113.65px] -top-[34.26px] -left-[28.98px]' src="https://s3-alpha-sig.figma.com/img/412b/7cd2/20b43ee5ac3f5368825965add36ebfc9?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpTaInP5hpm920EgXPaI4CHbueo1~~qwDB0FobSBLJwYlZyRtLzKQ6jUn1~K1VWWokv8TWKkwHNj8bbdmXhLbMPBlr6LfBTpluy4REQjCP6PQH2m0YmrNE5WCIb9Auicj81Wzad5dz-XlHtxuwHnu-sz0wQyGr6oLC5baafJoaB5WdyJLPui5ODcUTMOT8RPut5y~ZknONGMNw1r3jUXDxDQuiNONmKRjKMz~S9e24G2RYYHPrNpPlt9RMtnbebimieiUNHnIsl4f3jYqSaiPp8f~3pRf7M1IfGmde8ukH-xBaqDeAzaWur-Xz-bCu5l9AV-ghZKm9sOB8uTWGw65A__" alt="" />
            <p className='w-[21.72px] h-[24.8px] top-[3.56px] left-[61.11px] text-[#06286E]'>Hygge<span className='w-[27.19px] h-[24.8px] top-[3.56px] left-[163.81px]'>x</span></p>
        </div>
        

        <div className='flex gap-10 items-center'>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <button className='bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 font-inter font-medium text-xl leading-[21.78px] text-white w-[128px] h-[48px] rounded-[32px] p-[13px 40px] gap-[10px]'>Login</button>
        </div>
    </div>
  )
}

export default Navbar