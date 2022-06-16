const fetchMemberships = async () => {
    const memberships = await listChannelMemberships(
    activeChannel.ChannelArn,
    userId
    );
    console.log('//----------------------------------------------------------------------',memberships);
    setActiveChannelMemberships(memberships);
    };