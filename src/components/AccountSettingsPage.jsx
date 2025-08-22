import React from 'react';

const AccountSettingsPage = () => {
  return (
    <div className="text-left">
      <h1 className="font-normal text-[20px] leading-[21px] tracking-normal text-[#1D2226] capitalize opacity-100 font-rubik w-[375px] h-[68px] bg-[#FFFFFF] -mx-[20px] px-[20px] mb-4 flex items-center">
        Account Settings
      </h1>

      <div className="p-4 rounded-md flex items-center gap-4 mb-4 relative">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/daibbnr3y/image/upload/v1755848197/personal_photo2_a32poy.jpg"
            alt="profile"
            className="profile-photo"
          />
          <div
            className="absolute cursor-pointer camera-icon"
            style={{
              top: '49px',
              left: '59px',
              width: '21px',
              height: '23px',
              backgroundImage: 'url(/camera.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              opacity: 1
            }}
          ></div>
        </div>
        <div>
          <p className="font-bold text-gray-800">Subrata Mondal</p>
          <p className="text-gray-600 text-sm">subrata24012005@gmail.com</p>
        </div>
      </div>

      <p className="w-[337px] h-[63px] text-gray-600 text-sm leading-relaxed">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettingsPage;
