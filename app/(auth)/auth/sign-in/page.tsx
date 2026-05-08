import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#0B0E14] p-6">
      {/* The Master Card Container */}
      <div className="relative w-full max-w-5xl bg-slate-950/50 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(99,102,241,0.15)] backdrop-blur-3xl flex flex-col md:flex-row">
        
        {/* Left Side: Form Content */}
        <div className="flex-[1.2] p-8 md:p-16 lg:p-20">
          <SignInFormClient />
        </div>

        {/* Right Side: Illustration (Medium Size) */}
        <div className="hidden md:flex flex-1 bg-white/5 items-center justify-center p-12">
          <div className="relative w-full aspect-square max-w-[320px]">
            <Image 
              src="/login.svg" 
              alt="Login-Image" 
              fill
              priority
              className='object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]'
            />
          </div>
        </div>

      </div>
    </main>
  )
}

export default SignInPage