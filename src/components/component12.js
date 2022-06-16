const fetchChannels = async () => {
    const userChannelMemberships = await listChannelMembershipsForAppInstanceUser(
    userId
    );
    console.log(userChannelMemberships);
    let userChannelList = []
    userChannelMemberships.map(
    (channelMembership) => {userChannelList.push(channelMembership.ChannelSummary)
    setJoinedChannels(oldArray=>[...oldArray,channelMembership.ChannelSummary.ChannelArn])
    }
    );
    console.log(userChannelList);
    get(userChannelList)
    const publicChannels = await listChannels(
    appConfig.appInstanceArn,
    userId
    );
    console.log(publicChannels);
   
    setChannelList(
    mergeArrayOfObjects(userChannelList, publicChannels, 'ChannelArn')
    );
    await publishStatusToAllChannels();
    };