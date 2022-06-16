async function onAddMember(userProfile,userName,channel){

  try {
    const membership = await createChannelMembership(
      channel.ChannelArn,
      `${appConfig.appInstanceArn}/user/${userProfile}`,
      userId
    );
    console.log("******************",channel.ChannelArn);
    console.log("******************",`${appConfig.appInstanceArn}/user/${userProfile}`);
    console.log("******************",userId);


    const memberships = activeChannelMemberships;
    memberships.push({ Member: membership });
    setActiveChannelMemberships(memberships);
    console.log("******************",activeChannelMemberships);
    dispatch({
      type: 0,
      payload: {
        message: `${channel.Name} Channel successfully created with ${userName}`,
        severity: 'success',
        autoClose: true,
      },
    });
    setModal('');
  } catch {
    dispatch({
      type: 0,
      payload: {
        message: 'Error occurred. Member not added to channel.',
        severity: 'error',
        autoClose: true,
      },
    });
  }
};
export default onAddMember;