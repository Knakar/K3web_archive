import {randomBytes, createHash} from 'crypto'

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

