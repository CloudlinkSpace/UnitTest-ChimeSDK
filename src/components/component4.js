async function  onCreateChannel(userProfile,userName){
      const channelArn = await createChannel(
        appConfig.appInstanceArn,
        null,
        member.username+ " & " + userName,
        "RESTRICTED",
        "PRIVATE",
        member.userId
      );
      console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-",channelArn);
      if (channelArn) {
        const channel = await describeChannel(channelArn, member.userId);
        setModal('');
        if (channel) {
          setChannelList([...channelList, channel]);
          setActiveChannel(channel);
          onAddMember(userProfile,userName,channel);
          AddModerator(channelArn,userProfile);
        } else {
          dispatch({
            type: 0,
            payload: {
              message: 'Error, could not retrieve channel information.',
              severity: 'error',
              autoClose: false,
            },
          });
        }
      } else {
        dispatch({
          type: 0,
          payload: {
            message: 'Error, could not create new channel.',
            severity: 'error',
            autoClose: false,
          },
        });
      }




  };
    export default onCreateChannel;
