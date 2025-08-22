import React from 'react';

const AccountSettingsPage = () => {
  return (
    <div className="text-left">
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Account Settings
      </h1>

      <div className="bg-gray-100 p-4 rounded-md flex items-center gap-4 mb-4">
        <img
          src="https://res.cloudinary.com/daibbnr3y/image/upload/v1755848197/personal_photo2_a32poy.jpg"
          alt="profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="font-bold text-gray-800">Subrata Mondal</p>
          <p className="text-gray-600 text-sm">subrata24012005@gmail.com</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettingsPage;
