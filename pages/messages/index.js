import Message from "@/components/modules/message";
import { verifyToken } from "@/utils/auth";
import { useEffect, useState } from "react";

export default function Messages({ messages }) {
  messages = messages.reverse();

  return (
    <div className="min-h-[80vh] container px-4 mx-auto mt-20">
      <>
        <div className=" flex justify-between items-center gap-3">
          <h1 className=" text-xl font-bold ">پیام ها :</h1>
        </div>
        <div className="">
          {messages.map((message) => (
            <Message key={message.id} data={message} />
          ))}
        </div>
      </>
    </div>
  );
}

export async function getServerSideProps(context) {
  let { req } = await context;
  const token1 = (await req.headers.cookie) || "messageSiteToken=";
  let token = token1.replace("messageSiteToken=", "");
  let email = await verifyToken(token);

  if (!token || !email) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  } else {
    let usersRes = await fetch(`${process.env.SERVER_LINK}/users`);
    let users = await usersRes.json();
    let user = await users.find((item) => item.email === email);
    let { id } = user;

    let messagesRes = await fetch(`${process.env.SERVER_LINK}/messages`);
    let messages = await messagesRes.json();
    let userMessages = [];
    await messages.map((message) => {
      if (message.userId === id) {
        userMessages.push(message);
      }
    });

    return {
      props: { messages: userMessages },
    };
  }
}
