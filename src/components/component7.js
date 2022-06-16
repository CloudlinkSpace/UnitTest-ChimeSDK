async function AddModerator(channelArn,userProfile){
    const test= await createChannelModerator(
      channelArn,
      `${appConfig.appInstanceArn}/user/${userProfile}`,
      userId
    )
  }