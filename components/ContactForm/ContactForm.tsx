import type React from 'react';

import { rightArrow } from '@/app/assets/assets';
import { followerData } from '@/data';

import FollowerLists from '../FollowerLists/FollowerLists';
import Form from './Form';
export default function ContactForm() {
  return (
    <div className='grid w-full grid-cols-1 gap-5 px-2 sm:px-0 lg:grid-cols-[1.65fr_1fr]'>
      {/* Form Section */}
      <Form />

      {/* Follower List Section */}
      <FollowerLists
        followerData={followerData}
        rightArrow={rightArrow}
      />
    </div>
  );
}
