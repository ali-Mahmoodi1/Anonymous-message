export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({
      status: "feild",
      message: "method should be POST",
    });
  }

  let { id, text } = req.body;

  let fetchRes = await fetch(`${process.env.SERVER_LINK}/messages`, {
    method: "POST",
    body: JSON.stringify({
      message: text,
      userId: id,
    }),
    headers: { "Content-type": "application/json" },
  });
  let data = await fetchRes.json();
  console.log(data);
}
