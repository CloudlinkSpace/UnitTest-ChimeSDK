const joinChannel = async (e) => {
    e.preventDefault();
    const membership = await createChannelMembership(
    activeChannel.ChannelArn,
    `${appConfig.appInstanceArn}/user/${userId}`,
    userId
    );
    if (membership) {
    const memberships = activeChannelMemberships;
    memberships.push({ Member: membership });
    setActiveChannelMemberships(memberships);
    channelIdChangeHandler(activeChannel.ChannelArn);
    setJoinedChannels([])
    fetchChannels()
    dispatch({
    type: 0,
    payload: {
    message: `Successfully joined ${activeChannel.Name}`,
    severity: 'success',
    autoClose: true,
    },
    });
    } else {
    dispatch({
    type: 0,
    payload: {
    message: 'Error occurred. Unable to join channel.',
    severity: 'error',
    autoClose: true,
    },
    });
    }
    };