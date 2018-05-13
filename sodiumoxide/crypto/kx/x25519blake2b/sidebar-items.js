initSidebarItems({"constant":[["PUBLICKEYBYTES","Number of bytes in a `PublicKey`."],["SECRETKEYBYTES","Number of bytes in a `SecretKey`."],["SEEDBYTES","NUmber of bytes in a `Seed`."],["SESSIONKEYBYTES","Number of bytes in a `SessionKey`."]],"fn":[["client_session_keys","`client_session_keys()` computes a pair of shared keys (rx and tx) using the client's public key `client_pk`, the client's secret key `client_sk` and the server's public key `server_pk`. If the server's public key is acceptable, it returns the two shared keys, the first for `rx` and the second for `tx`. Otherwise, it returns `None`."],["gen_keypair","`gen_keypair()` randomly generates a secret key and a corresponding public key."],["keypair_from_seed","`keypair_from_seed()` computes a secret key and a corresponding public key from a `Seed`."],["server_session_keys","`server_session_keys()` computes a pair of shared keys (rx and tx) using the server's public key `server_pk`, the server's secret key `server_sk` and the client's public key `client_pk`. If the client's public key is acceptable, it returns the two shared keys, the first for `rx` and the second for `tx`. Otherwise, it returns `None`."]],"struct":[["PublicKey","`PublicKey` for key exchanges."],["SecretKey","`SecretKey` for key exchanges."],["Seed","`Seed` that can be used for keypair generation"],["SessionKey","`SessionKey` is returned by `client_session_keys` and `server_session_keys` and is the exchanged secret between the client and server."]]});