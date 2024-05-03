'use client'

import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className={'content-background'}>
        <section className="flex justify-center items-center">
          <button className={` bg-principal-1`}>
            <a download href="public/Manual de La leyenda de Nova Terra-1-2 copy.pdf">
              Manual
            </a>
          </button>
        </section>
      </div>
    </main>
  )
}