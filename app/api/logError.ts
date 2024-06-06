// pages/api/logError.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const logError = (message: string) => {
  const logPath = path.join(process.cwd(), 'logs', 'error.log');
  const logMessage = `[${new Date().toISOString()}] ${message}\n\n`;
  fs.appendFileSync(logPath, logMessage);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { error } = req.body;
    if (error) {
      logError(error);
      res.status(200).json({ message: 'Error logged' });
    } else {
      res.status(400).json({ message: 'No error message provided' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
