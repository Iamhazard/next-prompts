export default async function handler(req, res) {
  // Handle errors and send an appropriate response
  const { error } = req.query;
  console.error(`Authentication error: ${error}`);

  res.status(403).json({ error: "AccessDenied", message: "Access denied." });
}
