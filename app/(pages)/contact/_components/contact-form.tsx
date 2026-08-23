import type React from 'react';
import Form from './form';
import FollowerLists from './follower-lists';
export default function ContactForm() {
  return (
    <div className='grid w-full grid-cols-1 gap-5 px-2 sm:px-0 lg:grid-cols-[1.65fr_1fr]'>
      {/* Form Section */}
      <Form />

      {/* Follower List Section */}
      <FollowerLists />
    </div>
  );
}
