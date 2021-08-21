import Link from 'next/link';

export default function Navbar() {
  const user = false;
  const username = false;

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/'>
            <button className='btn-logo'>FEED</button>
          </Link>
        </li>
        {/* user is signed-in and has username  */}
        {username && (
          <>
            <li className='push-left'>
              <Link href='/admin'>
                <button className='btn-blue'>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}
        {/* user is not signed or has not created username  */}
        {!username && (
          <>
            <Link href='/enter'>
              <button>Log in</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
