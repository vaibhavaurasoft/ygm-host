// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ status:1, message: `This is health check api for ${process.env.NEXT_PUBLIC_API_URL}`})
}
