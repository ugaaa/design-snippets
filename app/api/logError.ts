// pages/api/logError.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const logError = async (message: string) => {
  const logDir = path.join(process.cwd(), 'logs');
  const logPath = path.join(logDir, 'error.log');
  const logMessage = `[${new Date().toISOString()}] ${message}\n\n`;

  // logsディレクトリが存在しない場合は作成
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  try {
    // 非同期的にエラーログを書き込む
    await fs.promises.appendFile(logPath, logMessage);
  } catch (err) {
    console.error('Failed to write error log:', err);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { error } = req.body;
    if (error) {
      await logError(error);
      res.status(200).json({ message: 'Error logged' });
    } else {
      res.status(400).json({ message: 'No error message provided' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
