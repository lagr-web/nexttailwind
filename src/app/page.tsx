"use client"

import Image from 'next/image'
import NinjaCard from './NinjaCard';
import { actor } from "./type/types";
import data from "./lib/actors.json";

export default function Home() {

  return (
    <>

      <div className="container mx-auto my-10">
        <div
          className="
                   grid 
                   grid-cols-1 
                   md:grid-cols-2 
                   lg:grid-cols-3
                   gap-4 
      
                   mx-5 
                   md:mx-2
                   lg:mx-20
                  "
        >

          {data &&
            data.actors.map((item: actor, index: number) => (

              <NinjaCard key={"card" + index} mdata={item} mindex={index} />

            ))

          }



        </div>


      </div>


    </>

  )
}
