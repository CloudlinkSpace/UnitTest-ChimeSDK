async function publishStatusToAllChannels () {
    const servicePromises = [];
    for (const channel of channelListRef.current) {
    const status = computeAutoStatusForAChannel(channel);
    if (status) {
    servicePromises.push(sendChannelMessage(
    channel.ChannelArn,
    toPresenceMessage(PresenceMode.Auto, status, true),
    Persistence.NON_PERSISTENT,
    MessageType.CONTROL,
    member,
    ));
    }
    }
    return await Promise.all(servicePromises);
    }