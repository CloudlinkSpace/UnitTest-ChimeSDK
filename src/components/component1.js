function startPublishStatusWithInterval(){
 let publishTimeout;
 (async function publishStatusWithInterval() {
 if (!isAuthenticatedRef.current) {
 clearTimeout(publishTimeout);
 return;
 }
 await publishStatusToAllChannels();
 publishTimeout = setTimeout(publishStatusWithInterval, PUBLISH_INTERVAL);
 })();
 }

 export default startPublishStatusWithInterval;
