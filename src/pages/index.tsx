import "@/styles/globals.css";
import React from "react";

import ApplicantArchive from "@/pages/ApplicantArchive";


export default function Home() {
  return (
        <main className="flex flex-col overflow-y-auto min-w-max min-h-max justify-center pt-8">

            <div>
                <h1>HOME PAGE</h1>
            </div>
             <ApplicantArchive />

        </main>
  );
}
