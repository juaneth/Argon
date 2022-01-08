# Handle database login stuff without usernames and passwords

On client we could store a client generated hash of the invite, we could then de-encode it once we have to make an API request, verify with invite then also verify with the hashed uuid, on server we have the same hashed id except with a different salt, we could match them???? idk how to make this secure

https and nodejs maybe arent the best for a databse??