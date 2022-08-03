import {randomBytes, createHash} from 'crypto'
import {PrismaClient} from 'prisma/prisma-client/scripts/default-index';
import { NextApiRequest} from 'next';

const prisma = new PrismaClient();
type KeyPair  = {
  public: string,
  private: string
}
export function generateKeys(): KeyPair {
  const publicKey =  randomBytes(1024).toString('hex');
  const privateKey = createHash('RSA-512').update(publicKey, 'utf-8').digest('hex');
  return {
    public: publicKey,
    private: privateKey
  };
}

function certificateKeys(pubKey: string, pbKey: string): boolean {
  const hashedKey  = createHash('RSA-512').update(pubKey, 'utf-8').digest('hex');
  return hashedKey === pbKey;
}

export async function authenticateRequest(request: NextApiRequest): Promise<boolean> {
  //Todo: cors certification
  const token: string | undefined = request.cookies.token;
  const userId : string | undefined = request.cookies.id;
  if(!token&&userId) return false;
  const user = await prisma.user.findFirst({
    where: {
      id: userId
    }
  });
  return certificateKeys(token as string, user.key as string);
}