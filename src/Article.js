import { format } from "date-fns"
import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Article({ id, urls, user, created_at, likes }) {
  const [hover, setHover] = useState(false);


  const onHover = (e) => {
    e.preventDefault();
    setHover(true);
    console.log("hovered");
  };

  const onHoverOver = (e) => {
    e.preventDefault();
    setHover(false);
  };
  return (
    <>
      <div className="p-5 rounded-3xl shadow-md bg-white">
        <article key={id} className="rounded-3xl">

          <LazyLoadImage
             onMouseEnter={(e) => onHover(e)}
             onMouseLeave={(e) => onHoverOver(e)}
            src={urls.regular}
            alt={user.username}

            effect = "blur"
            className="h-52   w-fit lg:h-200 rounded-3xl"
          />
          <div> {hover && <p >{user.bio}</p>}</div>

          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start">
              <img
                src={user.profile_image.medium}
                alt={user.username}
                className="rounded-full mr-2 w-10 md:w-auto"
              />
              <ul>
                <li className="text-slate-800 font-bold">{user.name}</li>
                <li className="text-sm text-slate-800 opacity-75">
                  {format(new Date(created_at), "dd MMMM yyyy")}
                </li>
              </ul>
            </article>

            <article className="mt-5 md:mt-0">
              <a
                href={`https://instagram.com/${user.instagram_username}`}
                className="text-sm text-slate-800 opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username}
              </a>
              <small className="text-slate-800 opacity-75 block">
                {likes} Likes
              </small>
            </article>
          </div>
        </article>
      </div>
    </>
  )
}
