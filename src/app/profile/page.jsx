"use client"
import Link from 'next/link';
import Image from 'next/image';
import {
  User,
  Mail,
  Camera,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
  Calendar
} from 'lucide-react';
import { UpdateUserModal } from '@/components/ProfilePage/UpdateUserModal';
import DeleteUserModal from '@/components/ProfilePage/DeleteUserModal';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const ProfilePage = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;

  const handleSignOut = async () => {
          await authClient.signOut({
              fetchOptions: {
                  onSuccess: () => {
                      router.push("/signin");
                  },
              },
          });
  
      }


  return (
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50/20 py-8 md:py-12">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
            <User size={16} className="fill-white" />
            <span>My Account</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-sky-600">Profile</span>
            <span className="text-amber-600"> Dashboard</span>
          </h1>
          <div className="w-20 h-0.5 bg-linear-to-r from-sky-500 to-amber-500 mx-auto mt-3"></div>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-2xl shadow-xl border border-sky-100 overflow-hidden">

            <div className="h-40 bg-linear-to-r from-sky-500 via-cyan-400 to-amber-500 relative">
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0">
                <div className="relative group">
                  <div className="w-30 h-30 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                    <Image
                      src={user?.image}
                      alt={user?.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-sky-500 rounded-full p-1.5 shadow-md hover:bg-sky-600 transition">
                    <Camera size={12} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-16 pb-6 px-6 md:px-8">
              <div className="text-left">
                <h2 className="text-xl md:text-3xl font-bold text-stone-800">{user?.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Mail size={14} className="text-sky-500" />
                  <p className="text-stone-500 text-sm">{user?.email}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar size={14} className="text-amber-500" />
                  <p className="text-xs text-stone-400">Member since {user?.createdAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-stone-100">
                <div className="text-center p-3 bg-sky-50 rounded-xl">
                  <ShoppingBag size="20" className="text-sky-500 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-stone-800">07</p>
                  <p className="text-xs text-stone-500">Total Orders</p>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-xl">
                  <Heart size="20" className="text-amber-500 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-stone-800">15</p>
                  <p className="text-xs text-stone-500">Wishlist Items</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-stone-100">
                <UpdateUserModal user={user} />
                <DeleteUserModal />
              </div>

              <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-stone-100">
                <Link href="/orders" className="text-xs text-stone-500 hover:text-sky-600 transition flex items-center gap-1">
                  <ShoppingBag size={12} /> My Orders
                </Link>
                <Link href="/wishlist" className="text-xs text-stone-500 hover:text-sky-600 transition flex items-center gap-1">
                  <Heart size={12} /> Wishlist
                </Link>
                <Link href="/settings" className="text-xs text-stone-500 hover:text-sky-600 transition flex items-center gap-1">
                  <Settings size={12} /> Settings
                </Link>
                <button onClick={handleSignOut} className="text-xs cursor-pointer text-stone-500 hover:text-rose-500 transition flex items-center gap-1">
                  <LogOut size={12} /> LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;