import Button from '~/components/button';
import Editor from './editor';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto min-h-screen p-4">
      <NavigationMenu />
      <Editor />
    </div>
  );
}

function NavigationMenu() {
  return (
    <nav>
      <div className="flex justify-end gap-4">
        <Link
          href="/sign-in"
          className="tracking-tight font-medium hover:bg-slate-100 h-10 inline-flex justify-center items-center px-4 rounded-md text-slate-700 "
        >
          Sign In
        </Link>
        <Link
          href="/create-account"
          className="tracking-tight font-medium bg-slate-800 hover:bg-slate-700 h-10 inline-flex justify-center items-center px-4 rounded-md text-white"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}
