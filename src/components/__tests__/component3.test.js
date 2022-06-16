import publishStatusToAllChannels from '../component3';

test('test component 3 ', ()=>{

    const status = jest.fn();
    status('test');
    expect(status).toBeTruthy();
    expect(status).toHaveBeenCalledTimes(1);
    expect(status).toHaveBeenCalled();
})
