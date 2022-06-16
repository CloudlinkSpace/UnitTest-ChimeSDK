const getAllUsersFromCognitoIdp = () => {
    identityClient
        .getUsers()
        .then((users) => {
          const list = users.map((user) => {
            if (getUserAttributeByName(user, 'profile') !== 'none') {
              if (user.Attributes[0].Value == searchAtr){
                if (user.Attributes[2].Value != member.userId){
                  console.log("%c Username: ",'background: white;color: blue',user.Username);
                  console.log("%c Sub: ",'background: white;color: blue',user.Attributes[0].Value);
                  setUsersList( {
                    username: user.Username,
                    sub: user.Attributes.filter(
                      (attr) => attr.Name === 'sub'
                    )[0].Value,
                    profile: user.Attributes.filter(
                        (attr) => attr.Name === 'profile'
                    )[0].Value
                  })
                  userProfile = user.Attributes.filter(
                    (attr) => attr.Name === 'profile'
                  )[0].Value;
                  userName = user.Username;



                } else {
                  console.log("%c This is the authenticated user.",'color: orange');
                }

              return;
            }
            }
          });
          channelsCheck(userProfile,userName);
        })
        .catch((err) => {
          throw new Error(`Failed at getAllUsersFromCognitoIdp() with error: ${err}`);
        });
  }