const onAddMember = async () => {
    if (!selectedMember) {
    dispatch({
    type: 0,
    payload: {
    message: 'Error, user name cannot be blank.',
    severity: 'error',
    },
    });
    return;
    }
   
    try {
    const membership = await createChannelMembership(
    activeChannel.ChannelArn,
    `${appConfig.appInstanceArn}/user/${selectedMember.value}`,
    userId
    );
    console.log("******************",activeChannel.ChannelArn);
    console.log("******************",`${appConfig.appInstanceArn}/user/${selectedMember.value}`);
    console.log("******************",userId);
   
   
    const memberships = activeChannelMemberships;
    memberships.push({ Member: membership });
    setActiveChannelMemberships(memberships);
    console.log("******************",activeChannelMemberships);
    channelIdChangeHandler(activeChannel.ChannelArn);
    dispatch({
    type: 0,
    payload: {
    message: `New ${selectedMember.label} successfully added to ${activeChannel.Name}`,
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