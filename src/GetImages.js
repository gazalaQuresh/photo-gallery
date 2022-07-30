import { useState, useEffect } from "react"
import Article from "./Article"
import axios from 'axios'
import { getByPlaceholderText } from "@testing-library/react";

export default function GetImages() {
  const PAGE_NUMBER = 1;
  const [images, setImages] = useState([])
  const [photo, setPhoto] = useState("")
  const [page,setPage] = useState(PAGE_NUMBER);


  const changePhoto = () => {
      axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=100&query=${photo}&client_id=lWXpv1QjXZ5TYRwondNqdRFXP7jPjZV1zK6X9TjeUGk`)
          .then((response) => {
              // console.log(response.data);
              setImages(response.data.results);
          })
  }

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos?&per_page=100&client_id=lWXpv1QjXZ5TYRwondNqdRFXP7jPjZV1zK6X9TjeUGk`
      )
      const data = await response.json()
      console.log(data)
      setImages(data)
    }

    fetchImages()
  }, [page])


  const scrollToEnd = () =>{
    console.log(page+1)
    setPage(page+1);
  }
  window.onscroll = function(){
    if( window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
    {

      scrollToEnd()
    }
  }

  return (
    <>


      <div  className="p-5 rounded-3xl shadow-md bg-white">
      <input type="text"
                 placeholder="Enter..."
                   style=

                   {{
                    backgroundColor:'green',
                   color:'white',
                   marginTop:100,
                   paddingTop:10,
                   paddingLeft:20,
                   width:400,
                   fontSize:30,
                   borderTopStyle:"hidden",
                   borderRightStyle:"hidden",
                   borderLeftStyle:"hidden",
                   outline:"none",
                   borderBottomStyle:"groove",


               }}  className="rounded-3xl" value={photo} onChange={(e) => {
                    setPhoto(e.target.value)

                }} />
                <button type='submit' onClick={changePhoto}
                 style=
                   {{
                    backgroundColor:'pink',
                   color:'white',
                   width:200,
                   marginTop:10,
                   marginRight:1000,
                   fontSize:30,
                   borderTopStyle:"hidden",
                   borderRightStyle:"hidden",
                   borderLeftStyle:"hidden",
                   outline:"none",
                   borderBottomStyle:"groove",    }}
                   className="rounded-2xl" >search</button>

        <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
          Recommended For You
        </h1>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            {images.length > 0 && images.map((image) => (
              <Article key={image.id} {...image} />
            )
            )}
          </section>

      </div>
    </>
  )
}
