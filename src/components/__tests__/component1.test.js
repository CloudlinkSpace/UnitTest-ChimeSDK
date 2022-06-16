import startPublishStatusWithInterval from '../component1';

test('test component 1 ', ()=>{
  const startPublish = jest.fn();
  startPublish();
  startPublish();
  startPublish();

  expect(startPublish).toBeTruthy();
  expect(startPublish).toHaveBeenCalledTimes(3);
  expect(startPublish).toHaveBeenCalled();
})
