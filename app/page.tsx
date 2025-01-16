'use client'

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";

export default function Home() {

  const createDocumnet=useMutation(api.documents.createDocument)
  const documnets= useQuery(api.documents.getDocument)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button onClick={()=>{createDocumnet({title:"Hello"})}}>Click Me</button>


        {
          documnets?.map((doc)=>(
            <div key={doc._id}>{doc.title}</div>
          ))
        }
      </Authenticated>
    </div>
  );
}
