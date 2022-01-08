# Handle database login stuff without usernames and passwords

On client we could store a client generated hash of the invite, we could then de-encode with the uuid not stored on the device from an api request, once we have to make another API request, verify with invite then also verify with the hashed uuid, on server we have the same hashed id except with a different salt, we could match them???? idk how to make this secure

https and nodejs maybe arent the best for a databse??

I could go the normal way with a "username" and "password", username being invite used to create account and password... a password created upon account creation.

https://www.npmjs.com/package/bcrypt encrypt with this and then also have https stuffs