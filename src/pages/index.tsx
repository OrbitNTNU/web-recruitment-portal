import "@/styles/globals.css";
import React from "react";

import ApplicantArchive from "@/pages/ApplicantArchive";


export default function Home() {
  return (
        <main className=" w-screen h-screen flex justify-center content-center">

            <section className={"justify-center content-center"}>
                <div className="flex justify-center text-lg">
                    <h1>HOME PAGE</h1>
                </div>
                <ApplicantArchive />

            </section>
        </main>
  );
}
