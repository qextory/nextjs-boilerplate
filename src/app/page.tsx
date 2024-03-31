import Image from 'next/image';

import { cn } from '@/lib/utils';

import { DemoCookieSettings } from './_components/cookie-settings';
import { DemoCreateAccount } from './_components/create-account';

function DemoContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center justify-center [&>div]:w-full', className)}
      {...props}
    />
  );
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <>
        <div className='md:hidden'>
          <Image
            src='/examples/cards-light.png'
            width={1280}
            height={1214}
            alt='Cards'
            className='block dark:hidden'
          />
          <Image
            src='/examples/cards-dark.png'
            width={1280}
            height={1214}
            alt='Cards'
            className='hidden dark:block'
          />
        </div>
        <div className='hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3'>
          <div className='col-span-2 grid items-start gap-6 lg:col-span-1'>
            <DemoContainer>
              <DemoCreateAccount />
            </DemoContainer>
          </div>
          <div className='col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1'>
            <DemoContainer>
              <DemoCookieSettings />
            </DemoContainer>
          </div>
        </div>
      </>
    </main>
  );
}
