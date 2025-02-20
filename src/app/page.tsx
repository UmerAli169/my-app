// 'use client';
// import React, { useState } from 'react';
// import {  RegisterModal} from '../components/auth/modals/RegisterModal';
// import {  LoginModal} from '../components/auth/modals/LoginModal';
// import { RecoverPasswordModal } from '@/components/auth/modals/RecoverPasswordModal';
// import { ResetPasswordModal } from '@/components/auth/modals/ResetPasswordModal';


// export default function Home() {
//   const [activeModal, setActiveModal] = useState<'login' | 'register' | 'recover' | 'reset' | null>(null);

//   const closeModal = () => setActiveModal(null);

//   return (
//     <main className="min-h-screen p-8">
//       <div className="max-w-md mx-auto space-y-4">
//         <h1 className="text-2xl font-bold mb-8">Auth Modal Demo</h1>
        
     
//         <div className="space-y-4">
//           <button
//             onClick={() => setActiveModal('login')}
//             className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
//           >
//             Open Login Modal
//           </button>
          
//           <button
//             onClick={() => setActiveModal('register')}
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           >
//             Open Register Modal
//           </button>
          
//           <button
//             onClick={() => setActiveModal('recover')}
//             className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           >
//             Open Recover Password Modal
//           </button>
//         </div>

//         {/* Modals */}
//         <LoginModal
//           isOpen={activeModal === 'login'}
//           onClose={closeModal}
//           onRecoverPassword={() => setActiveModal('recover')}
//           onCreateAccount={() => setActiveModal('register')}
//         />

//         <RegisterModal
//           isOpen={activeModal === 'register'}
//           onClose={closeModal}
//           onLoginClick={() => setActiveModal('login')}
//         />

// <RecoverPasswordModal
//           isOpen={activeModal === 'recover'}
//           onClose={closeModal}
//           onLoginClick={() => setActiveModal('login')}
//         />

//         <ResetPasswordModal
//           isOpen={activeModal === 'reset'}
//           onClose={closeModal}
//           token="dummy-token"
//         />
//       </div>
  
//     </main>
//   );
// }


import React from 'react'
import { RecoverPasswordModal } from '@/components/auth/modals/RecoverPasswordModal';
import { ResetPasswordModal } from '@/components/auth/modals/ResetPasswordModal';

function page() {
  return (
    <div>
      
    </div>
  )
}

export default page
