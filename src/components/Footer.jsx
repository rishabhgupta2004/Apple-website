import React from 'react';

const Footer = () => {
  const footerLinks = [
    'Privacy Policy',
    'Terms of Use',
    'Sales Policy',
    'Legal',
    'Site Map',
  ];

  return (
    <footer className="py-5 sm:px-10 px-5 bg-black">
      <div className="screen-max-width">
        {/* Top Info Section */}
        <div>
          <p className="font-semibold text-gray-100 text-xs">
            More ways to shop:{' '}
            <span className="underline text-blue-400 cursor-pointer">
              Find an Apple Store
            </span>{' '}
            or{' '}
            <span className="underline text-blue-400 cursor-pointer">
              other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray-100 text-xs mt-1">
            Or call 000800 040 1946
          </p>
        </div>

        {/* Divider */}
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        {/* Bottom Section */}
        <div className="flex md:flex-row flex-col md:items-center justify-between gap-2">
          <p className="font-semibold text-gray-100 text-xs">
            Copyright © 2025 Apple Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-2 text-gray-100 text-xs font-semibold">
            {footerLinks.map((link, i) => (
              <React.Fragment key={link}>
                <p className="cursor-pointer hover:underline">{link}</p>
                {i !== footerLinks.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
