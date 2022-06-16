async function channelsCheck(userProfile,userName){
    for(let i=0;i<channelsData.length;i++){
        if(channelsData[i].Privacy==="PRIVATE"){
          const channelMembers = await listChannelMemberships(channelsData[i].ChannelArn,member.userId)
          console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+",channelMembers);
          if(channelMembers.length==2){
            console.log("%c Channel name: ",'color: yellow',channelsData[i].Name);
            console.log("%c Member1: ",'color: lightgreen',channelMembers[0].Member.Name);
            console.log("%c Member2: ",'color: lightgreen',channelMembers[1].Member.Name);
            if((channelMembers[0].Member.Name == member.username && channelMembers[1].Member.Name == userName) || (channelMembers[0].Member.Name == userName && channelMembers[1].Member.Name == member.username))
            {
              console.log("%c Channel already exist: ",'background: white; color: purple',channelsData[i].Name);
              x=true;
              break;
            }else{
              x=false;
            }
          }

        }
      }
      if(x==false){
        console.log("Doesn't exist");
        onCreateChannel(userProfile,userName);
      }else if(x==true){
        dispatch({
          type: 0,
          payload: {
            message: 'Channel Already exist',
            severity: 'error',
            autoClose: true,
          },
        });
      }
  };

  export default channelsCheck;
