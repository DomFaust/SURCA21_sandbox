export class SHA_1{
  Date !: any;
  ID !: any;
  Block_Size !: any;
  Hex_Digest !: any;
  Session_File !: any;
  Digest_Size !: any;

}

export class SHA_2{
  Date !: any;
  ID !: any;
  Block_Size_224 !: any;
  Digest_Size_224 !: any;
  Hex_Digest_224 !: any;
  Block_Size_256 !: any;
  Digest_Size_256 !: any;
  Hex_Digest_256 !: any;
  Block_Size_384 !: any;
  Digest_Size_384 !: any;
  Hex_Digest_384 !: any;
  Block_Size_512 !: any;
  Digest_Size_512 !: any;
  Hex_Digest_512 !: any;
  Session_File !: any;

}

export class SHA{
  sha_1 !: SHA_1;
  sha_2 !: SHA_2;
}
