import React from 'react'
import { Link } from "react-router-dom";

export default function Nav(){
  return (
    <>
      <div>
        <nav className="text-xl font-bold text-white">
          <ul className='flex gap-10 bg-slate-600 p-4'>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`favorites`}>Favorites</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
  );
}